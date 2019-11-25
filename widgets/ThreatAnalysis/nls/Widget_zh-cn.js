// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ThreatAnalysis/nls/strings":{_widgetLabel:"\u5a01\u80c1\u5206\u6790",threatAnalysisMainPageTitle:"\u57fa\u4e8e JCAT \u53cd\u6050\u6307\u5357",jcatURL:"https://www.dni.gov/nctc/jcat/references.html",inputLocation:"\u8f93\u5165\u4f4d\u7f6e",interactive:"\u4ea4\u4e92\u5f0f",fromCoord:"\u56fa\u5b9a\u5750\u6807",existingFeature:"\u4ece\u73b0\u6709\u8981\u7d20",threatAnalysisCoordInputLabel:"\u5a01\u80c1\u4f4d\u7f6e",enterCoords:"\u8f93\u5165\u5750\u6807",threatAddPointToolTip:"\u6dfb\u52a0\u5a01\u80c1\u4f4d\u7f6e",
threatDrawPointToolTip:"\u5355\u51fb\u6dfb\u52a0\u5a01\u80c1\u4f4d\u7f6e",threatType:"\u5a01\u80c1\u7c7b\u578b",threatPlaceholder:"\u5f00\u59cb\u8f93\u5165\u4ee5\u641c\u7d22\u5a01\u80c1",mandatoryLabel:"\u5f3a\u5236\u758f\u6563\u8ddd\u79bb",safeLabel:"\u5b89\u5168\u758f\u6563\u8ddd\u79bb",zoneTypeLabel:"\u5206\u533a\u7c7b\u578b",feetLabel:"\u82f1\u5c3a",metersLabel:"\u7c73",unitsLabel:"\u5355\u4f4d",threatGraphicLayer:"\u5a01\u80c1\u56fe\u5f62",settingsTitle:"\u8bbe\u7f6e",mandatoryButtonLabel:"\u914d\u7f6e\u5f3a\u5236\u758f\u6563\u8ddd\u79bb\u8bbe\u7f6e",
safeButtonLabel:"\u914d\u7f6e\u5c31\u5730\u907f\u96be\u6240\u8bbe\u7f6e",style:"\u6837\u5f0f",colorPicker:"\u989c\u8272\u9009\u53d6\u5668",lineStyles:{esriSLSDash:"\u865a\u7ebf",esriSLSDashDot:"\u70b9\u5212\u7ebf",esriSLSDashDotDot:"\u53cc\u70b9\u5212\u7ebf",esriSLSDot:"\u70b9",esriSLSLongDash:"\u957f\u5212\u7ebf",esriSLSLongDashDot:"\u957f\u70b9\u5212\u7ebf",esriSLSNull:"Null",esriSLSShortDash:"\u77ed\u865a\u7ebf",esriSLSShortDashDot:"\u77ed\u70b9\u5212\u7ebf",esriSLSShortDashDotDot:"\u77ed\u53cc\u70b9\u5212\u7ebf",
esriSLSShortDot:"\u77ed\u70b9\u7ebf",esriSLSSolid:"\u5b9e\u7ebf"},fillStyles:{esriSFSBackwardDiagonal:"\u5411\u540e",esriSFSCross:"\u5341\u5b57\u5f62",esriSFSDiagonalCross:"\u5bf9\u89d2\u7ebf",esriSFSForwardDiagonal:"\u5411\u524d",esriSFSHorizontal:"\u6c34\u5e73",esriSFSNull:"Null",esriSFSSolid:"\u5b9e\u7ebf",esriSFSVertical:"\u7ad6\u76f4"},resultsTitle:"\u7ed3\u679c",publishTABtn:"\u53d1\u5e03",layerName:"\u53d1\u5e03\u7684\u56fe\u5c42\u540d\u79f0",invalidLayerName:"\u56fe\u5c42\u540d\u79f0\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u548c\u4e0b\u5212\u7ebf",
missingLayerName:"\u60a8\u5fc5\u987b\u8f93\u5165\u56fe\u5c42\u540d\u79f0",missingLayerNameMessage:"\u53d1\u5e03\u4e4b\u524d\uff0c\u60a8\u5fc5\u987b\u8f93\u5165\u6709\u6548\u7684\u56fe\u5c42\u540d\u79f0",publishingFailedLayerExists:"\u53d1\u5e03\u5931\u8d25\uff1a\u60a8\u5df2\u62e5\u6709\u540d\u4e3a {0} \u7684\u8981\u7d20\u670d\u52a1\u3002 \u8bf7\u9009\u62e9\u5176\u4ed6\u56fe\u5c42\u540d\u79f0\u3002",checkService:"\u68c0\u67e5\u670d\u52a1\uff1a{0}",createService:"\u521b\u5efa\u670d\u52a1\uff1a{0}",
unableToCreate:"\u65e0\u6cd5\u521b\u5efa\uff1a{0}",addToDefinition:"\u6dfb\u52a0\u5230\u5b9a\u4e49\uff1a{0}",successfullyPublished:"\u5df2\u6210\u529f\u53d1\u5e03 web \u56fe\u5c42{0}\u7ba1\u7406 web \u56fe\u5c42",successfullyAppended:"\u5df2\u6210\u529f\u5c06\u65b0\u8981\u7d20\u9644\u52a0\u5230 web \u56fe\u5c42{0}\u7ba1\u7406 web \u56fe\u5c42",userRole:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff0c\u56e0\u6b64\u65e0\u6cd5\u521b\u5efa\u670d\u52a1",retrieveExistingLayerError:"\u65e0\u6cd5\u68c0\u7d22 {0}\u3002 \u8bf7\u4f7f\u7528\u5176\u4ed6\u56fe\u5c42\u540d\u79f0\u8fdb\u884c\u53d1\u5e03",
publishToNewLayer:"\u5c06\u7ed3\u679c\u53d1\u5e03\u5230\u65b0\u8981\u7d20\u56fe\u5c42",pipeBombLabel:"\u7ba1\u5f0f\u70b8\u5f39",suicideBombLabel:"\u81ea\u6740\u5f0f\u70b8\u5f39",briefcaseLabel:"\u516c\u6587\u5305",carLabel:"\u6c7d\u8f66",suvVanLabel:"SUV/VAN",smallDeliveryTruckLabel:"\u5c0f\u578b\u9001\u8d27\u5361\u8f66",containerWaterTruckLabel:"\u96c6\u88c5\u7bb1/\u6c34\u8f66",semiTrailerLabel:"\u534a\u6302\u8f66",transparencyLabel:"\u900f\u660e\u5ea6",outline:"\u8f6e\u5ed3",fill:"\u586b\u5145(\u4ec5\u5728\u5c06\u6837\u5f0f\u8bbe\u7f6e\u4e3a\u5355\u8272\u65f6\u5e94\u7528\u989c\u8272)",
createBtn:"\u521b\u5efa\u533a\u57df",clearBtn:"\u6e05\u9664",invalidNumberMessage:"\u8f93\u5165\u7684\u503c\u65e0\u6548",invalidRangeMessage:"\u503c\u5fc5\u987b\u5927\u4e8e 0",parseCoordinatesError:"\u65e0\u6cd5\u89e3\u6790\u5750\u6807\u3002 \u8bf7\u68c0\u67e5\u60a8\u7684\u8f93\u5165\u3002",manualCoordinateInputInfo:"\u624b\u52a8\u8f93\u5165\u5750\u6807\uff0c\u7136\u540e\u5355\u51fb \x3cb\x3eEnter\x3c/b\x3e \u952e\u8fdb\u884c\u7f29\u653e",selectDrawModeLabel:"\u9009\u62e9\u7ed8\u5236\u6a21\u5f0f",
selectFeatureLabel:"\u4ece\u6b64\u56fe\u5c42\u4e2d\u9009\u62e9\u8981\u7d20",_localized:{}}});