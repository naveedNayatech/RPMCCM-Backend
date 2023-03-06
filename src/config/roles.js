

const allRoles = {
  patient: [],
  admin: ['devices','unsetHrDr','assignMultiple' ,'logs','patientApproval','hrAndAdmin', 'doctorsAndAdmin', 'adminPasswordReset','patients','doctors','hr','careplan','uploads','reports','notifications','reporttotaltimereading', 'adminslist', 'deleteadmin', 'deleteminute', 'chat', 'criticalTelemetaryData'],
  adminStaff:[],
  HrMedical:['patients','hr','assignMultiple','patientsReadingComment','hrAndAdmin','careplan','uploads','notifications','reporttotaltimereading', 'ccmPts'],
  HrNonMedical:[],
  doctor:['patients','doctors','assignMultiple','patientsReadingComment','doctorsAndAdmin', 'careplan','uploads','notifications','reporttotaltimereading', 'ccmPts'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
