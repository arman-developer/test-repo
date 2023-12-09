export const status = {
	ACTIVE: "active",
	INACTIVE: "inactive",
	PENDING: "pending"
} as const;

export const statusLogger = (myNum: number) => myNum<10? status.ACTIVE : myNum<20? status.INACTIVE:status.PENDING