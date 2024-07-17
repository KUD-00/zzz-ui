const UserIndicator = ({ icon, username, level, currentPoints, totalPoints }: {icon: string, username: string, level: number, currentPoints: number, totalPoints: number}) => {
  const progressPercentage = (currentPoints / totalPoints) * 100;
  const pointsText = `${currentPoints}/${totalPoints}`;

  return (
    <div className="flex items-center bg-gray-950 text-white rounded-full py-1 pl-2 pr-6">
      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-600 mr-3">
        <img src={icon} alt="Profile" className="w-full h-full rounded-full" />
      </div>
      <div className="flex flex-col gap-1 mr-8">
        <span className="text-xl font-black">{username}</span>
        <div className="relative w-32 bg-gray-700 h-3 rounded-full overflow-hidden drop-shadow-sm">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
            {pointsText}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-black">{level}</div>
        <div className="text-xs font-black text-gray-500">LEVEL</div>
      </div>
    </div>
  );
};

export default UserIndicator;

