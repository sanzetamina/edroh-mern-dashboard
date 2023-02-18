import OverallStat from "../models/OverallStat.js";


export const getSales = async (req, res) => {
    try {
        const overallStats = await OverallStat.find();
        res.status(200).json(overallStats[0]);  // zero since we are sending only the first element
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
