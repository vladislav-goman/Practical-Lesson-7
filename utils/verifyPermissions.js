import * as Permissions from "expo-permissions";

const verifyPermissions = async requestedPermission => {
  const result = await Permissions.askAsync(Permissions[requestedPermission]);
  if (result.status !== "granted") {
    Alert.alert(
      "No Permission!",
      `You need to grant ${requestedPermission} permission to use this app!`,
      [{ text: "Okay" }]
    );
    return false;
  } else return true;
};

export default verifyPermissions;
