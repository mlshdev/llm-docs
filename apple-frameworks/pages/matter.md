> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter](https://developer.apple.com/documentation/matter)

# Matter (Swift)

**Framework:** Matter  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Communicate with and control smart home devices from a variety of manufacturers.

<a id="overview"></a>

## Overview

The [Matter](https://csa-iot.org/all-solutions/matter/) smart home connectivity standard enables interoperability between various smart home devices and ecosystems. Use  [MatterSupport](mattersupport.md)  to bring accessories onto a local network, then commission and control those accessories using Matter.

![A diagram showing communication between Matter and non-Matter devices within a home. At the center is a Matter-enabled iOS device that connects to a Matter garage door controller on the left and a Matter light switch on the right. The Matter light switch connects to a Matter lamp controller. There are also non-Matter devices in the diagram: an outlet switch, a HomePod, and an Apple TV.](https://developer.apple.com/images/com.apple.matter/media-4199669@2x.png)

To access a Matter accessory on a network, you must commission it. Commissioning provides credentials to enable secure communication and performs initial accessory configuration. Once you commission an accessory, it exposes areas of functionality called clusters that you use to control it. For example, a light exposes the On/Off cluster to control whether it’s on or off. A dimmable light also exposes the Level Control cluster to control its brightness.

## Topics

### Matter device onboarding

- [Onboarding a Matter device](matter/onboarding-a-matter-device.md): Prepare your app to discover and control a Matter device.

### Matter device interactions

- [Controller initialization](matter/controller-initialization.md): Initialize the object that controls Matter accessories.
- [Accessory commissioning](matter/accessory-commissioning.md): Commission a Matter accessory onto a network.
- [Accessory control](matter/accessory-control.md): Communicate with commissioned Matter accessories.
- [Clusters](matter/clusters.md): Interact with groups of related functionality that Matter accessories expose.

### Reference

- [Other symbols](matter/other-symbols.md)
- [Matter Constants](matter/matter-constants.md)
- [Matter Functions](matter/matter-functions.md)

### Classes

- [MTRAccessControlClusterAccessRestrictionEntryStruct](matter/mtraccesscontrolclusteraccessrestrictionentrystruct.md)
- [MTRAccessControlClusterAccessRestrictionStruct](matter/mtraccesscontrolclusteraccessrestrictionstruct.md)
- [MTRAccessControlClusterCommissioningAccessRestrictionEntryStruct](matter/mtraccesscontrolclustercommissioningaccessrestrictionentrystruct.md)
- [MTRAccessControlClusterFabricRestrictionReviewUpdateEvent](matter/mtraccesscontrolclusterfabricrestrictionreviewupdateevent.md)
- [MTRAccessControlClusterReviewFabricRestrictionsParams](matter/mtraccesscontrolclusterreviewfabricrestrictionsparams.md)
- [MTRAccessControlClusterReviewFabricRestrictionsResponseParams](matter/mtraccesscontrolclusterreviewfabricrestrictionsresponseparams.md)
- [MTRAccountLoginClusterLoggedOutEvent](matter/mtraccountloginclusterloggedoutevent.md)
- [MTRAttributeValueWaiter](matter/mtrattributevaluewaiter.md)
- [MTRBaseClusterCommissionerControl](matter/mtrbaseclustercommissionercontrol.md): Cluster Commissioner Control
- [MTRBaseClusterContentAppObserver](matter/mtrbaseclustercontentappobserver.md): Cluster Content App Observer
- [MTRBaseClusterDeviceEnergyManagement](matter/mtrbaseclusterdeviceenergymanagement.md): Cluster Device Energy Management
- [MTRBaseClusterDeviceEnergyManagementMode](matter/mtrbaseclusterdeviceenergymanagementmode.md): Cluster Device Energy Management Mode
- [MTRBaseClusterDishwasherAlarm](matter/mtrbaseclusterdishwasheralarm.md): Cluster Dishwasher Alarm
- [MTRBaseClusterDishwasherMode](matter/mtrbaseclusterdishwashermode.md): Cluster Dishwasher Mode
- [MTRBaseClusterEnergyEVSE](matter/mtrbaseclusterenergyevse.md): Cluster Energy EVSE
- [MTRBaseClusterEnergyEVSEMode](matter/mtrbaseclusterenergyevsemode.md): Cluster Energy EVSE Mode
- [MTRBaseClusterICDManagement](matter/mtrbaseclustericdmanagement.md): Cluster ICD Management
- [MTRBaseClusterLaundryDryerControls](matter/mtrbaseclusterlaundrydryercontrols.md): Cluster Laundry Dryer Controls
- [MTRBaseClusterLaundryWasherControls](matter/mtrbaseclusterlaundrywashercontrols.md): Cluster Laundry Washer Controls
- [MTRBaseClusterLaundryWasherMode](matter/mtrbaseclusterlaundrywashermode.md): Cluster Laundry Washer Mode
- [MTRBaseClusterMessages](matter/mtrbaseclustermessages.md): Cluster Messages
- [MTRBaseClusterMicrowaveOvenControl](matter/mtrbaseclustermicrowaveovencontrol.md): Cluster Microwave Oven Control
- [MTRBaseClusterMicrowaveOvenMode](matter/mtrbaseclustermicrowaveovenmode.md): Cluster Microwave Oven Mode
- [MTRBaseClusterOvenCavityOperationalState](matter/mtrbaseclusterovencavityoperationalstate.md): Cluster Oven Cavity Operational State
- [MTRBaseClusterOvenMode](matter/mtrbaseclusterovenmode.md): Cluster Oven Mode
- [MTRBaseClusterPowerTopology](matter/mtrbaseclusterpowertopology.md): Cluster Power Topology
- [MTRBaseClusterRefrigeratorAlarm](matter/mtrbaseclusterrefrigeratoralarm.md): Cluster Refrigerator Alarm
- [MTRBaseClusterRefrigeratorAndTemperatureControlledCabinetMode](matter/mtrbaseclusterrefrigeratorandtemperaturecontrolledcabinetmode.md): Cluster Refrigerator And Temperature Controlled Cabinet Mode
- [MTRBaseClusterServiceArea](matter/mtrbaseclusterservicearea.md): Cluster Service Area
- [MTRBaseClusterTemperatureControl](matter/mtrbaseclustertemperaturecontrol.md): Cluster Temperature Control
- [MTRBaseClusterThreadBorderRouterManagement](matter/mtrbaseclusterthreadborderroutermanagement.md): Cluster Thread Border Router Management
- [MTRBaseClusterThreadNetworkDirectory](matter/mtrbaseclusterthreadnetworkdirectory.md): Cluster Thread Network Directory
- [MTRBaseClusterTimeSynchronization](matter/mtrbaseclustertimesynchronization.md): Cluster Time Synchronization
- [MTRBaseClusterWaterHeaterManagement](matter/mtrbaseclusterwaterheatermanagement.md): Cluster Water Heater Management
- [MTRBaseClusterWaterHeaterMode](matter/mtrbaseclusterwaterheatermode.md): Cluster Water Heater Mode
- [MTRBaseClusterWiFiNetworkManagement](matter/mtrbaseclusterwifinetworkmanagement.md): Cluster Wi-Fi Network Management
- [MTRBridgedDeviceBasicInformationClusterActiveChangedEvent](matter/mtrbridgeddevicebasicinformationclusteractivechangedevent.md)
- [MTRBridgedDeviceBasicInformationClusterKeepActiveParams](matter/mtrbridgeddevicebasicinformationclusterkeepactiveparams.md)
- [MTRChannelClusterCancelRecordProgramParams](matter/mtrchannelclustercancelrecordprogramparams.md)
- [MTRChannelClusterChannelPagingStruct](matter/mtrchannelclusterchannelpagingstruct.md)
- [MTRChannelClusterGetProgramGuideParams](matter/mtrchannelclustergetprogramguideparams.md)
- [MTRChannelClusterPageTokenStruct](matter/mtrchannelclusterpagetokenstruct.md)
- [MTRChannelClusterProgramCastStruct](matter/mtrchannelclusterprogramcaststruct.md)
- [MTRChannelClusterProgramCategoryStruct](matter/mtrchannelclusterprogramcategorystruct.md)
- [MTRChannelClusterProgramGuideResponseParams](matter/mtrchannelclusterprogramguideresponseparams.md)
- [MTRChannelClusterProgramStruct](matter/mtrchannelclusterprogramstruct.md)
- [MTRChannelClusterRecordProgramParams](matter/mtrchannelclusterrecordprogramparams.md)
- [MTRChannelClusterSeriesInfoStruct](matter/mtrchannelclusterseriesinfostruct.md)
- [MTRClusterCommissionerControl](matter/mtrclustercommissionercontrol.md): Cluster Commissioner Control Supports the ability for clients to request the commissioning of themselves or other nodes onto a fabric which the cluster server can commission onto.
- [MTRClusterContentAppObserver](matter/mtrclustercontentappobserver.md): Cluster Content App Observer This cluster provides an interface for sending targeted commands to an Observer of a Content App on a Video Player device such as a Streaming Media Player, Smart TV or Smart Screen. The cluster server for Content App Observer is implemented by an endpoint that communicates with a Content App, such as a Casting Video Client. The cluster client for Content App Observer is implemented by a Content App endpoint. A Content App is informed of the NodeId of an Observer when a binding is set on the Content App. The Content App can then send the ContentAppMessage to the Observer (server cluster), and the Observer responds with a ContentAppMessageResponse.
- [MTRClusterDeviceEnergyManagement](matter/mtrclusterdeviceenergymanagement.md): Cluster Device Energy Management This cluster allows a client to manage the power draw of a device. An example of such a client could be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA).
- [MTRClusterDeviceEnergyManagementMode](matter/mtrclusterdeviceenergymanagementmode.md): Cluster Device Energy Management Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterDishwasherAlarm](matter/mtrclusterdishwasheralarm.md): Cluster Dishwasher Alarm Attributes and commands for configuring the Dishwasher alarm.
- [MTRClusterDishwasherMode](matter/mtrclusterdishwashermode.md): Cluster Dishwasher Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterEnergyEVSE](matter/mtrclusterenergyevse.md): Cluster Energy EVSE Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric Vehicle Supply Equipment (EVSE) management.
- [MTRClusterEnergyEVSEMode](matter/mtrclusterenergyevsemode.md): Cluster Energy EVSE Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterICDManagement](matter/mtrclustericdmanagement.md): Cluster ICD Management Allows servers to ensure that listed clients are notified when a server is available for communication.
- [MTRClusterLaundryDryerControls](matter/mtrclusterlaundrydryercontrols.md): Cluster Laundry Dryer Controls This cluster provides a way to access options associated with the operation of a laundry dryer device type.
- [MTRClusterLaundryWasherControls](matter/mtrclusterlaundrywashercontrols.md): Cluster Laundry Washer Controls This cluster supports remotely monitoring and controlling the different types of functionality available to a washing device, such as a washing machine.
- [MTRClusterLaundryWasherMode](matter/mtrclusterlaundrywashermode.md): Cluster Laundry Washer Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterMessages](matter/mtrclustermessages.md): Cluster Messages This cluster provides an interface for passing messages to be presented by a device.
- [MTRClusterMicrowaveOvenControl](matter/mtrclustermicrowaveovencontrol.md): Cluster Microwave Oven Control Attributes and commands for configuring the microwave oven control, and reporting cooking stats.
- [MTRClusterMicrowaveOvenMode](matter/mtrclustermicrowaveovenmode.md): Cluster Microwave Oven Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterOvenCavityOperationalState](matter/mtrclusterovencavityoperationalstate.md): Cluster Oven Cavity Operational State This cluster supports remotely monitoring and, where supported, changing the operational state of an Oven.
- [MTRClusterOvenMode](matter/mtrclusterovenmode.md): Cluster Oven Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterPowerTopology](matter/mtrclusterpowertopology.md): Cluster Power Topology The Power Topology Cluster provides a mechanism for expressing how power is flowing between endpoints.
- [MTRClusterRefrigeratorAlarm](matter/mtrclusterrefrigeratoralarm.md): Cluster Refrigerator Alarm Attributes and commands for configuring the Refrigerator alarm.
- [MTRClusterRefrigeratorAndTemperatureControlledCabinetMode](matter/mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode.md): Cluster Refrigerator And Temperature Controlled Cabinet Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterServiceArea](matter/mtrclusterservicearea.md): Cluster Service Area The Service Area cluster provides an interface for controlling the areas where a device should operate, and for querying the current area being serviced.
- [MTRClusterTemperatureControl](matter/mtrclustertemperaturecontrol.md): Cluster Temperature Control Attributes and commands for configuring the temperature control, and reporting temperature.
- [MTRClusterThreadBorderRouterManagement](matter/mtrclusterthreadborderroutermanagement.md): Cluster Thread Border Router Management Manage the Thread network of Thread Border Router
- [MTRClusterThreadNetworkDirectory](matter/mtrclusterthreadnetworkdirectory.md): Cluster Thread Network Directory Manages the names and credentials of Thread networks visible to the user.
- [MTRClusterTimeSynchronization](matter/mtrclustertimesynchronization.md): Cluster Time Synchronization Accurate time is required for a number of reasons, including scheduling, display and validating security materials.
- [MTRClusterWaterHeaterManagement](matter/mtrclusterwaterheatermanagement.md): Cluster Water Heater Management This cluster is used to allow clients to control the operation of a hot water heating appliance so that it can be used with energy management.
- [MTRClusterWaterHeaterMode](matter/mtrclusterwaterheatermode.md): Cluster Water Heater Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterWiFiNetworkManagement](matter/mtrclusterwifinetworkmanagement.md): Cluster Wi-Fi Network Management Functionality to retrieve operational information about a managed Wi-Fi network.
- [MTRCommandWithRequiredResponse](matter/mtrcommandwithrequiredresponse.md): An object representing a single command to be invoked and the response required for the invoke to be considered successful.
- [MTRCommissioneeInfo](matter/mtrcommissioneeinfo.md): Information read from the commissionee device during commissioning.
- [MTRCommissionerControlClusterCommissionNodeParams](matter/mtrcommissionercontrolclustercommissionnodeparams.md)
- [MTRCommissionerControlClusterCommissioningRequestResultEvent](matter/mtrcommissionercontrolclustercommissioningrequestresultevent.md)
- [MTRCommissionerControlClusterRequestCommissioningApprovalParams](matter/mtrcommissionercontrolclusterrequestcommissioningapprovalparams.md)
- [MTRCommissionerControlClusterReverseOpenCommissioningWindowParams](matter/mtrcommissionercontrolclusterreverseopencommissioningwindowparams.md)
- [MTRCommissioningOperation](matter/mtrcommissioningoperation.md)
- [MTRContentAppObserverClusterContentAppMessageParams](matter/mtrcontentappobserverclustercontentappmessageparams.md)
- [MTRContentAppObserverClusterContentAppMessageResponseParams](matter/mtrcontentappobserverclustercontentappmessageresponseparams.md)
- [MTRDataTypeAtomicAttributeStatusStruct](matter/mtrdatatypeatomicattributestatusstruct.md)
- [MTRDataTypeLocationDescriptorStruct](matter/mtrdatatypelocationdescriptorstruct.md)
- [MTRDeviceEnergyManagementClusterCancelPowerAdjustRequestParams](matter/mtrdeviceenergymanagementclustercancelpoweradjustrequestparams.md)
- [MTRDeviceEnergyManagementClusterCancelRequestParams](matter/mtrdeviceenergymanagementclustercancelrequestparams.md)
- [MTRDeviceEnergyManagementClusterConstraintsStruct](matter/mtrdeviceenergymanagementclusterconstraintsstruct.md)
- [MTRDeviceEnergyManagementClusterCostStruct](matter/mtrdeviceenergymanagementclustercoststruct.md)
- [MTRDeviceEnergyManagementClusterForecastStruct](matter/mtrdeviceenergymanagementclusterforecaststruct.md)
- [MTRDeviceEnergyManagementClusterModifyForecastRequestParams](matter/mtrdeviceenergymanagementclustermodifyforecastrequestparams.md)
- [MTRDeviceEnergyManagementClusterPauseRequestParams](matter/mtrdeviceenergymanagementclusterpauserequestparams.md)
- [MTRDeviceEnergyManagementClusterPausedEvent](matter/mtrdeviceenergymanagementclusterpausedevent.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustCapabilityStruct](matter/mtrdeviceenergymanagementclusterpoweradjustcapabilitystruct.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustEndEvent](matter/mtrdeviceenergymanagementclusterpoweradjustendevent.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustRequestParams](matter/mtrdeviceenergymanagementclusterpoweradjustrequestparams.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustStartEvent](matter/mtrdeviceenergymanagementclusterpoweradjuststartevent.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustStruct](matter/mtrdeviceenergymanagementclusterpoweradjuststruct.md)
- [MTRDeviceEnergyManagementClusterRequestConstraintBasedForecastParams](matter/mtrdeviceenergymanagementclusterrequestconstraintbasedforecastparams.md)
- [MTRDeviceEnergyManagementClusterResumeRequestParams](matter/mtrdeviceenergymanagementclusterresumerequestparams.md)
- [MTRDeviceEnergyManagementClusterResumedEvent](matter/mtrdeviceenergymanagementclusterresumedevent.md)
- [MTRDeviceEnergyManagementClusterSlotAdjustmentStruct](matter/mtrdeviceenergymanagementclusterslotadjustmentstruct.md)
- [MTRDeviceEnergyManagementClusterSlotStruct](matter/mtrdeviceenergymanagementclusterslotstruct.md)
- [MTRDeviceEnergyManagementClusterStartTimeAdjustRequestParams](matter/mtrdeviceenergymanagementclusterstarttimeadjustrequestparams.md)
- [MTRDeviceEnergyManagementModeClusterChangeToModeParams](matter/mtrdeviceenergymanagementmodeclusterchangetomodeparams.md)
- [MTRDeviceEnergyManagementModeClusterChangeToModeResponseParams](matter/mtrdeviceenergymanagementmodeclusterchangetomoderesponseparams.md)
- [MTRDeviceEnergyManagementModeClusterModeOptionStruct](matter/mtrdeviceenergymanagementmodeclustermodeoptionstruct.md)
- [MTRDeviceEnergyManagementModeClusterModeTagStruct](matter/mtrdeviceenergymanagementmodeclustermodetagstruct.md)
- [MTRDeviceType](matter/mtrdevicetype.md): Meta-data about a device type defined in the Matter specification.
- [MTRDishwasherAlarmClusterModifyEnabledAlarmsParams](matter/mtrdishwasheralarmclustermodifyenabledalarmsparams.md)
- [MTRDishwasherAlarmClusterNotifyEvent](matter/mtrdishwasheralarmclusternotifyevent.md)
- [MTRDishwasherAlarmClusterResetParams](matter/mtrdishwasheralarmclusterresetparams.md)
- [MTRDishwasherModeClusterChangeToModeParams](matter/mtrdishwashermodeclusterchangetomodeparams.md)
- [MTRDishwasherModeClusterChangeToModeResponseParams](matter/mtrdishwashermodeclusterchangetomoderesponseparams.md)
- [MTRDishwasherModeClusterModeOptionStruct](matter/mtrdishwashermodeclustermodeoptionstruct.md)
- [MTRDishwasherModeClusterModeTagStruct](matter/mtrdishwashermodeclustermodetagstruct.md)
- [MTRDoorLockClusterClearAliroReaderConfigParams](matter/mtrdoorlockclusterclearaliroreaderconfigparams.md)
- [MTRDoorLockClusterSetAliroReaderConfigParams](matter/mtrdoorlockclustersetaliroreaderconfigparams.md)
- [MTRDoorLockClusterUnboltDoorParams](matter/mtrdoorlockclusterunboltdoorparams.md)
- [MTRElectricalEnergyMeasurementClusterMeasurementAccuracyRangeStruct](matter/mtrelectricalenergymeasurementclustermeasurementaccuracyrangestruct.md)
- [MTREndpointInfo](matter/mtrendpointinfo.md): Meta-data about an endpoint of a Matter node.
- [MTREnergyEVSEClusterChargingTargetScheduleStruct](matter/mtrenergyevseclusterchargingtargetschedulestruct.md)
- [MTREnergyEVSEClusterChargingTargetStruct](matter/mtrenergyevseclusterchargingtargetstruct.md)
- [MTREnergyEVSEClusterClearTargetsParams](matter/mtrenergyevseclustercleartargetsparams.md)
- [MTREnergyEVSEClusterDisableParams](matter/mtrenergyevseclusterdisableparams.md)
- [MTREnergyEVSEClusterEVConnectedEvent](matter/mtrenergyevseclusterevconnectedevent.md)
- [MTREnergyEVSEClusterEVNotDetectedEvent](matter/mtrenergyevseclusterevnotdetectedevent.md)
- [MTREnergyEVSEClusterEnableChargingParams](matter/mtrenergyevseclusterenablechargingparams.md)
- [MTREnergyEVSEClusterEnergyTransferStartedEvent](matter/mtrenergyevseclusterenergytransferstartedevent.md)
- [MTREnergyEVSEClusterEnergyTransferStoppedEvent](matter/mtrenergyevseclusterenergytransferstoppedevent.md)
- [MTREnergyEVSEClusterFaultEvent](matter/mtrenergyevseclusterfaultevent.md)
- [MTREnergyEVSEClusterGetTargetsParams](matter/mtrenergyevseclustergettargetsparams.md)
- [MTREnergyEVSEClusterGetTargetsResponseParams](matter/mtrenergyevseclustergettargetsresponseparams.md)
- [MTREnergyEVSEClusterRFIDEvent](matter/mtrenergyevseclusterrfidevent.md)
- [MTREnergyEVSEClusterSetTargetsParams](matter/mtrenergyevseclustersettargetsparams.md)
- [MTREnergyEVSEClusterStartDiagnosticsParams](matter/mtrenergyevseclusterstartdiagnosticsparams.md)
- [MTREnergyEVSEModeClusterChangeToModeParams](matter/mtrenergyevsemodeclusterchangetomodeparams.md)
- [MTREnergyEVSEModeClusterChangeToModeResponseParams](matter/mtrenergyevsemodeclusterchangetomoderesponseparams.md)
- [MTREnergyEVSEModeClusterModeOptionStruct](matter/mtrenergyevsemodeclustermodeoptionstruct.md)
- [MTREnergyEVSEModeClusterModeTagStruct](matter/mtrenergyevsemodeclustermodetagstruct.md)
- [MTRGeneralDiagnosticsClusterPayloadTestRequestParams](matter/mtrgeneraldiagnosticsclusterpayloadtestrequestparams.md)
- [MTRGeneralDiagnosticsClusterPayloadTestResponseParams](matter/mtrgeneraldiagnosticsclusterpayloadtestresponseparams.md)
- [MTRGeneralDiagnosticsClusterTimeSnapshotParams](matter/mtrgeneraldiagnosticsclustertimesnapshotparams.md)
- [MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams](matter/mtrgeneraldiagnosticsclustertimesnapshotresponseparams.md)
- [MTRICDManagementClusterMonitoringRegistrationStruct](matter/mtricdmanagementclustermonitoringregistrationstruct.md)
- [MTRICDManagementClusterRegisterClientParams](matter/mtricdmanagementclusterregisterclientparams.md)
- [MTRICDManagementClusterRegisterClientResponseParams](matter/mtricdmanagementclusterregisterclientresponseparams.md)
- [MTRICDManagementClusterStayActiveRequestParams](matter/mtricdmanagementclusterstayactiverequestparams.md)
- [MTRICDManagementClusterStayActiveResponseParams](matter/mtricdmanagementclusterstayactiveresponseparams.md)
- [MTRICDManagementClusterUnregisterClientParams](matter/mtricdmanagementclusterunregisterclientparams.md)
- [MTRLaundryWasherModeClusterChangeToModeParams](matter/mtrlaundrywashermodeclusterchangetomodeparams.md)
- [MTRLaundryWasherModeClusterChangeToModeResponseParams](matter/mtrlaundrywashermodeclusterchangetomoderesponseparams.md)
- [MTRLaundryWasherModeClusterModeOptionStruct](matter/mtrlaundrywashermodeclustermodeoptionstruct.md)
- [MTRLaundryWasherModeClusterModeTagStruct](matter/mtrlaundrywashermodeclustermodetagstruct.md)
- [MTRMediaPlaybackClusterActivateAudioTrackParams](matter/mtrmediaplaybackclusteractivateaudiotrackparams.md)
- [MTRMediaPlaybackClusterActivateTextTrackParams](matter/mtrmediaplaybackclusteractivatetexttrackparams.md)
- [MTRMediaPlaybackClusterDeactivateTextTrackParams](matter/mtrmediaplaybackclusterdeactivatetexttrackparams.md)
- [MTRMediaPlaybackClusterStateChangedEvent](matter/mtrmediaplaybackclusterstatechangedevent.md)
- [MTRMessagesClusterCancelMessagesRequestParams](matter/mtrmessagesclustercancelmessagesrequestparams.md)
- [MTRMessagesClusterMessageCompleteEvent](matter/mtrmessagesclustermessagecompleteevent.md)
- [MTRMessagesClusterMessagePresentedEvent](matter/mtrmessagesclustermessagepresentedevent.md)
- [MTRMessagesClusterMessageQueuedEvent](matter/mtrmessagesclustermessagequeuedevent.md)
- [MTRMessagesClusterMessageResponseOptionStruct](matter/mtrmessagesclustermessageresponseoptionstruct.md)
- [MTRMessagesClusterMessageStruct](matter/mtrmessagesclustermessagestruct.md)
- [MTRMessagesClusterPresentMessagesRequestParams](matter/mtrmessagesclusterpresentmessagesrequestparams.md)
- [MTRMicrowaveOvenControlClusterAddMoreTimeParams](matter/mtrmicrowaveovencontrolclusteraddmoretimeparams.md)
- [MTRMicrowaveOvenControlClusterSetCookingParametersParams](matter/mtrmicrowaveovencontrolclustersetcookingparametersparams.md)
- [MTRMicrowaveOvenModeClusterModeOptionStruct](matter/mtrmicrowaveovenmodeclustermodeoptionstruct.md)
- [MTRMicrowaveOvenModeClusterModeTagStruct](matter/mtrmicrowaveovenmodeclustermodetagstruct.md)
- [MTROccupancySensingClusterHoldTimeLimitsStruct](matter/mtroccupancysensingclusterholdtimelimitsstruct.md)
- [MTROccupancySensingClusterOccupancyChangedEvent](matter/mtroccupancysensingclusteroccupancychangedevent.md)
- [MTROvenCavityOperationalStateClusterErrorStateStruct](matter/mtrovencavityoperationalstateclustererrorstatestruct.md)
- [MTROvenCavityOperationalStateClusterOperationCompletionEvent](matter/mtrovencavityoperationalstateclusteroperationcompletionevent.md)
- [MTROvenCavityOperationalStateClusterOperationalCommandResponseParams](matter/mtrovencavityoperationalstateclusteroperationalcommandresponseparams.md)
- [MTROvenCavityOperationalStateClusterOperationalErrorEvent](matter/mtrovencavityoperationalstateclusteroperationalerrorevent.md)
- [MTROvenCavityOperationalStateClusterOperationalStateStruct](matter/mtrovencavityoperationalstateclusteroperationalstatestruct.md)
- [MTROvenCavityOperationalStateClusterStartParams](matter/mtrovencavityoperationalstateclusterstartparams.md)
- [MTROvenCavityOperationalStateClusterStopParams](matter/mtrovencavityoperationalstateclusterstopparams.md)
- [MTROvenModeClusterChangeToModeParams](matter/mtrovenmodeclusterchangetomodeparams.md)
- [MTROvenModeClusterChangeToModeResponseParams](matter/mtrovenmodeclusterchangetomoderesponseparams.md)
- [MTROvenModeClusterModeOptionStruct](matter/mtrovenmodeclustermodeoptionstruct.md)
- [MTROvenModeClusterModeTagStruct](matter/mtrovenmodeclustermodetagstruct.md)
- [MTRRVCOperationalStateClusterGoHomeParams](matter/mtrrvcoperationalstateclustergohomeparams.md)
- [MTRRefrigeratorAlarmClusterNotifyEvent](matter/mtrrefrigeratoralarmclusternotifyevent.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterChangeToModeParams](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclusterchangetomodeparams.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterChangeToModeResponseParams](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclusterchangetomoderesponseparams.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterModeOptionStruct](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclustermodeoptionstruct.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterModeTagStruct](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclustermodetagstruct.md)
- [MTRServiceAreaClusterAreaInfoStruct](matter/mtrserviceareaclusterareainfostruct.md)
- [MTRServiceAreaClusterAreaStruct](matter/mtrserviceareaclusterareastruct.md)
- [MTRServiceAreaClusterLandmarkInfoStruct](matter/mtrserviceareaclusterlandmarkinfostruct.md)
- [MTRServiceAreaClusterMapStruct](matter/mtrserviceareaclustermapstruct.md)
- [MTRServiceAreaClusterProgressStruct](matter/mtrserviceareaclusterprogressstruct.md)
- [MTRServiceAreaClusterSelectAreasParams](matter/mtrserviceareaclusterselectareasparams.md)
- [MTRServiceAreaClusterSelectAreasResponseParams](matter/mtrserviceareaclusterselectareasresponseparams.md)
- [MTRServiceAreaClusterSkipAreaParams](matter/mtrserviceareaclusterskipareaparams.md)
- [MTRServiceAreaClusterSkipAreaResponseParams](matter/mtrserviceareaclusterskiparearesponseparams.md)
- [MTRTargetNavigatorClusterTargetUpdatedEvent](matter/mtrtargetnavigatorclustertargetupdatedevent.md)
- [MTRTemperatureControlClusterSetTemperatureParams](matter/mtrtemperaturecontrolclustersettemperatureparams.md)
- [MTRThermostatClusterAtomicRequestParams](matter/mtrthermostatclusteratomicrequestparams.md)
- [MTRThermostatClusterAtomicResponseParams](matter/mtrthermostatclusteratomicresponseparams.md)
- [MTRThermostatClusterPresetStruct](matter/mtrthermostatclusterpresetstruct.md)
- [MTRThermostatClusterPresetTypeStruct](matter/mtrthermostatclusterpresettypestruct.md)
- [MTRThermostatClusterScheduleStruct](matter/mtrthermostatclusterschedulestruct.md)
- [MTRThermostatClusterScheduleTransitionStruct](matter/mtrthermostatclusterscheduletransitionstruct.md)
- [MTRThermostatClusterScheduleTypeStruct](matter/mtrthermostatclusterscheduletypestruct.md)
- [MTRThermostatClusterSetActivePresetRequestParams](matter/mtrthermostatclustersetactivepresetrequestparams.md)
- [MTRThermostatClusterSetActiveScheduleRequestParams](matter/mtrthermostatclustersetactiveschedulerequestparams.md)
- [MTRThreadBorderRouterManagementClusterDatasetResponseParams](matter/mtrthreadborderroutermanagementclusterdatasetresponseparams.md)
- [MTRThreadBorderRouterManagementClusterGetActiveDatasetRequestParams](matter/mtrthreadborderroutermanagementclustergetactivedatasetrequestparams.md)
- [MTRThreadBorderRouterManagementClusterGetPendingDatasetRequestParams](matter/mtrthreadborderroutermanagementclustergetpendingdatasetrequestparams.md)
- [MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams](matter/mtrthreadborderroutermanagementclustersetactivedatasetrequestparams.md)
- [MTRThreadBorderRouterManagementClusterSetPendingDatasetRequestParams](matter/mtrthreadborderroutermanagementclustersetpendingdatasetrequestparams.md)
- [MTRThreadNetworkDirectoryClusterAddNetworkParams](matter/mtrthreadnetworkdirectoryclusteraddnetworkparams.md)
- [MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams](matter/mtrthreadnetworkdirectoryclustergetoperationaldatasetparams.md)
- [MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams](matter/mtrthreadnetworkdirectoryclusteroperationaldatasetresponseparams.md)
- [MTRThreadNetworkDirectoryClusterRemoveNetworkParams](matter/mtrthreadnetworkdirectoryclusterremovenetworkparams.md)
- [MTRThreadNetworkDirectoryClusterThreadNetworkStruct](matter/mtrthreadnetworkdirectoryclusterthreadnetworkstruct.md)
- [MTRTimeSynchronizationClusterDSTStatusEvent](matter/mtrtimesynchronizationclusterdststatusevent.md)
- [MTRTimeSynchronizationClusterDSTTableEmptyEvent](matter/mtrtimesynchronizationclusterdsttableemptyevent.md)
- [MTRTimeSynchronizationClusterFabricScopedTrustedTimeSourceStruct](matter/mtrtimesynchronizationclusterfabricscopedtrustedtimesourcestruct.md)
- [MTRTimeSynchronizationClusterMissingTrustedTimeSourceEvent](matter/mtrtimesynchronizationclustermissingtrustedtimesourceevent.md)
- [MTRTimeSynchronizationClusterSetDSTOffsetParams](matter/mtrtimesynchronizationclustersetdstoffsetparams.md)
- [MTRTimeSynchronizationClusterSetDefaultNTPParams](matter/mtrtimesynchronizationclustersetdefaultntpparams.md)
- [MTRTimeSynchronizationClusterSetTimeZoneParams](matter/mtrtimesynchronizationclustersettimezoneparams.md)
- [MTRTimeSynchronizationClusterSetTimeZoneResponseParams](matter/mtrtimesynchronizationclustersettimezoneresponseparams.md)
- [MTRTimeSynchronizationClusterSetTrustedTimeSourceParams](matter/mtrtimesynchronizationclustersettrustedtimesourceparams.md)
- [MTRTimeSynchronizationClusterTimeFailureEvent](matter/mtrtimesynchronizationclustertimefailureevent.md)
- [MTRTimeSynchronizationClusterTimeZoneStatusEvent](matter/mtrtimesynchronizationclustertimezonestatusevent.md)
- [MTRTimeSynchronizationClusterTrustedTimeSourceStruct](matter/mtrtimesynchronizationclustertrustedtimesourcestruct.md)
- [MTRWaterHeaterManagementClusterBoostEndedEvent](matter/mtrwaterheatermanagementclusterboostendedevent.md)
- [MTRWaterHeaterManagementClusterBoostParams](matter/mtrwaterheatermanagementclusterboostparams.md)
- [MTRWaterHeaterManagementClusterBoostStartedEvent](matter/mtrwaterheatermanagementclusterbooststartedevent.md)
- [MTRWaterHeaterManagementClusterCancelBoostParams](matter/mtrwaterheatermanagementclustercancelboostparams.md)
- [MTRWaterHeaterManagementClusterWaterHeaterBoostInfoStruct](matter/mtrwaterheatermanagementclusterwaterheaterboostinfostruct.md)
- [MTRWaterHeaterModeClusterChangeToModeParams](matter/mtrwaterheatermodeclusterchangetomodeparams.md)
- [MTRWaterHeaterModeClusterChangeToModeResponseParams](matter/mtrwaterheatermodeclusterchangetomoderesponseparams.md)
- [MTRWaterHeaterModeClusterModeOptionStruct](matter/mtrwaterheatermodeclustermodeoptionstruct.md)
- [MTRWaterHeaterModeClusterModeTagStruct](matter/mtrwaterheatermodeclustermodetagstruct.md)
- [MTRWiFiNetworkManagementClusterNetworkPassphraseRequestParams](matter/mtrwifinetworkmanagementclusternetworkpassphraserequestparams.md)
- [MTRWiFiNetworkManagementClusterNetworkPassphraseResponseParams](matter/mtrwifinetworkmanagementclusternetworkpassphraseresponseparams.md)
- [MTRXPCDeviceControllerParameters](matter/mtrxpcdevicecontrollerparameters.md)

### Protocols

- [MTRCommissioningDelegate](matter/mtrcommissioningdelegate.md)
- [MTRXPCClientProtocol](matter/mtrxpcclientprotocol.md)
- [MTRXPCClientProtocol_MTRDevice](matter/mtrxpcclientprotocol_mtrdevice.md)
- [MTRXPCClientProtocol_MTRDeviceController](matter/mtrxpcclientprotocol_mtrdevicecontroller.md)
- [MTRXPCServerProtocol](matter/mtrxpcserverprotocol.md)
- [MTRXPCServerProtocol_MTRDevice](matter/mtrxpcserverprotocol_mtrdevice.md)
- [MTRXPCServerProtocol_MTRDeviceController](matter/mtrxpcserverprotocol_mtrdevicecontroller.md)

### Structures

- [MTRAccessControlFeature](matter/mtraccesscontrolfeature.md)
- [MTRBridgedDeviceBasicInformationFeature](matter/mtrbridgeddevicebasicinformationfeature.md)
- [MTRChannelRecordingFlagBitmap](matter/mtrchannelrecordingflagbitmap.md)
- [MTRColorControlColorCapabilitiesBitmap](matter/mtrcolorcontrolcolorcapabilitiesbitmap.md)
- [MTRColorControlOptionsBitmap](matter/mtrcolorcontroloptionsbitmap.md)
- [MTRColorControlUpdateFlagsBitmap](matter/mtrcolorcontrolupdateflagsbitmap.md)
- [MTRCommissionerControlSupportedDeviceCategoryBitmap](matter/mtrcommissionercontrolsupporteddevicecategorybitmap.md)
- [MTRDeviceEnergyManagementFeature](matter/mtrdeviceenergymanagementfeature.md)
- [MTRDishwasherAlarmAlarmBitmap](matter/mtrdishwasheralarmalarmbitmap.md)
- [MTRDishwasherAlarmFeature](matter/mtrdishwasheralarmfeature.md)
- [MTREnergyEVSEFeature](matter/mtrenergyevsefeature.md)
- [MTREnergyEVSETargetDayOfWeekBitmap](matter/mtrenergyevsetargetdayofweekbitmap.md)
- [MTRGeneralDiagnosticsFeature](matter/mtrgeneraldiagnosticsfeature.md)
- [MTRICDManagementFeature](matter/mtricdmanagementfeature.md)
- [MTRICDManagementUserActiveModeTriggerBitmap](matter/mtricdmanagementuseractivemodetriggerbitmap.md)
- [MTRLaundryWasherControlsFeature](matter/mtrlaundrywashercontrolsfeature.md)
- [MTRMessagesFeature](matter/mtrmessagesfeature.md)
- [MTRMessagesMessageControlBitmap](matter/mtrmessagesmessagecontrolbitmap.md)
- [MTRMicrowaveOvenControlFeature](matter/mtrmicrowaveovencontrolfeature.md)
- [MTRNetworkCommissioningThreadCapabilitiesBitmap](matter/mtrnetworkcommissioningthreadcapabilitiesbitmap.md)
- [MTROccupancySensingFeature](matter/mtroccupancysensingfeature.md)
- [MTRPowerTopologyFeature](matter/mtrpowertopologyfeature.md)
- [MTRRefrigeratorAlarmAlarmBitmap](matter/mtrrefrigeratoralarmalarmbitmap.md)
- [MTRServiceAreaFeature](matter/mtrserviceareafeature.md)
- [MTRTemperatureControlFeature](matter/mtrtemperaturecontrolfeature.md)
- [MTRThermostatACErrorCodeBitmap](matter/mtrthermostatacerrorcodebitmap.md)
- [MTRThermostatHVACSystemTypeBitmap](matter/mtrthermostathvacsystemtypebitmap.md)
- [MTRThermostatOccupancyBitmap](matter/mtrthermostatoccupancybitmap.md)
- [MTRThermostatPresetTypeFeaturesBitmap](matter/mtrthermostatpresettypefeaturesbitmap.md)
- [MTRThermostatProgrammingOperationModeBitmap](matter/mtrthermostatprogrammingoperationmodebitmap.md)
- [MTRThermostatRelayStateBitmap](matter/mtrthermostatrelaystatebitmap.md)
- [MTRThermostatRemoteSensingBitmap](matter/mtrthermostatremotesensingbitmap.md)
- [MTRThermostatScheduleTypeFeaturesBitmap](matter/mtrthermostatscheduletypefeaturesbitmap.md)
- [MTRThreadBorderRouterManagementFeature](matter/mtrthreadborderroutermanagementfeature.md)
- [MTRTimeSynchronizationFeature](matter/mtrtimesynchronizationfeature.md)
- [MTRWaterHeaterManagementFeature](matter/mtrwaterheatermanagementfeature.md)
- [MTRWaterHeaterManagementWaterHeaterHeatSourceBitmap](matter/mtrwaterheatermanagementwaterheaterheatsourcebitmap.md)

### Variables

- [MTRCommissioningSessionTransportType](matter/mtrcommissioningsessiontransporttype.md)
- [MTRDeviceControllerRegistrationControllerCompressedFabricIDKey](matter/mtrdevicecontrollerregistrationcontrollercompressedfabricidkey.md)
- [MTRDeviceControllerRegistrationControllerContextKey](matter/mtrdevicecontrollerregistrationcontrollercontextkey.md)
- [MTRDeviceControllerRegistrationControllerIsRunningKey](matter/mtrdevicecontrollerregistrationcontrollerisrunningkey.md)
- [MTRDeviceControllerRegistrationControllerNodeIDKey](matter/mtrdevicecontrollerregistrationcontrollernodeidkey.md)
- [MTRDeviceControllerRegistrationDeviceInternalStateKey](matter/mtrdevicecontrollerregistrationdeviceinternalstatekey.md)
- [MTRDeviceControllerRegistrationNodeIDKey](matter/mtrdevicecontrollerregistrationnodeidkey.md)
- [MTRDeviceControllerRegistrationNodeIDsKey](matter/mtrdevicecontrollerregistrationnodeidskey.md)
- [MTRUnpoweredInitialPhase](matter/mtrunpoweredinitialphase.md)

### Functions

- [MTREventNameForID(\_:\_:)](matter/mtreventnameforid%28____%29.md): Resolve Matter event IDs into a descriptive string.
- [MTRRequestCommandNameForID(\_:\_:)](matter/mtrrequestcommandnameforid%28____%29.md): Resolve Matter request (client to server) command IDs into a descriptive string.
- [MTRResponseCommandNameForID(\_:\_:)](matter/mtrresponsecommandnameforid%28____%29.md): Resolve Matter response (server to client) command IDs into a descriptive string.

### Enumerations

- [MTRAccessControlAccessRestrictionType](matter/mtraccesscontrolaccessrestrictiontype.md)
- [MTRChannelType](matter/mtrchanneltype.md)
- [MTRColorControlDirection](matter/mtrcolorcontroldirection.md)
- [MTRColorControlDriftCompensation](matter/mtrcolorcontroldriftcompensation.md)
- [MTRColorControlEnhancedColorMode](matter/mtrcolorcontrolenhancedcolormode.md)
- [MTRColorControlMoveMode](matter/mtrcolorcontrolmovemode.md)
- [MTRColorControlStepMode](matter/mtrcolorcontrolstepmode.md)
- [MTRContentAppObserverStatus](matter/mtrcontentappobserverstatus.md)
- [MTRDataTypeAtomicRequestTypeEnum](matter/mtrdatatypeatomicrequesttypeenum.md)
- [MTRDataTypeLandmarkTag](matter/mtrdatatypelandmarktag.md)
- [MTRDataTypePositionTag](matter/mtrdatatypepositiontag.md)
- [MTRDataTypeRelativePositionTag](matter/mtrdatatyperelativepositiontag.md)
- [MTRDeviceEnergyManagementAdjustmentCause](matter/mtrdeviceenergymanagementadjustmentcause.md)
- [MTRDeviceEnergyManagementCause](matter/mtrdeviceenergymanagementcause.md)
- [MTRDeviceEnergyManagementCostType](matter/mtrdeviceenergymanagementcosttype.md)
- [MTRDeviceEnergyManagementESAState](matter/mtrdeviceenergymanagementesastate.md)
- [MTRDeviceEnergyManagementESAType](matter/mtrdeviceenergymanagementesatype.md)
- [MTRDeviceEnergyManagementForecastUpdateReason](matter/mtrdeviceenergymanagementforecastupdatereason.md)
- [MTRDeviceEnergyManagementModeModeTag](matter/mtrdeviceenergymanagementmodemodetag.md)
- [MTRDeviceEnergyManagementOptOutState](matter/mtrdeviceenergymanagementoptoutstate.md)
- [MTRDeviceEnergyManagementPowerAdjustReason](matter/mtrdeviceenergymanagementpoweradjustreason.md)
- [MTRDeviceTypeIDType](matter/mtrdevicetypeidtype.md)
- [MTRDishwasherModeModeTag](matter/mtrdishwashermodemodetag.md)
- [MTRElectricalEnergyMeasurementMeasurementType](matter/mtrelectricalenergymeasurementmeasurementtype.md)
- [MTREnergyEVSEEnergyTransferStoppedReason](matter/mtrenergyevseenergytransferstoppedreason.md)
- [MTREnergyEVSEFaultState](matter/mtrenergyevsefaultstate.md)
- [MTREnergyEVSEModeModeTag](matter/mtrenergyevsemodemodetag.md)
- [MTREnergyEVSEState](matter/mtrenergyevsestate.md)
- [MTREnergyEVSESupplyState](matter/mtrenergyevsesupplystate.md)
- [MTRICDManagementClientType](matter/mtricdmanagementclienttype.md)
- [MTRICDManagementOperatingMode](matter/mtricdmanagementoperatingmode.md)
- [MTRLaundryDryerControlsDrynessLevel](matter/mtrlaundrydryercontrolsdrynesslevel.md)
- [MTRLaundryWasherControlsNumberOfRinses](matter/mtrlaundrywashercontrolsnumberofrinses.md)
- [MTRLaundryWasherModeModeTag](matter/mtrlaundrywashermodemodetag.md)
- [MTRMediaPlaybackCharacteristic](matter/mtrmediaplaybackcharacteristic.md)
- [MTRMessagesFutureMessagePreference](matter/mtrmessagesfuturemessagepreference.md)
- [MTRMessagesMessagePriority](matter/mtrmessagesmessagepriority.md)
- [MTRMicrowaveOvenModeModeTag](matter/mtrmicrowaveovenmodemodetag.md)
- [MTROvenCavityOperationalStateErrorState](matter/mtrovencavityoperationalstateerrorstate.md)
- [MTROvenCavityOperationalStateOperationalState](matter/mtrovencavityoperationalstateoperationalstate.md)
- [MTROvenModeModeTag](matter/mtrovenmodemodetag.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeModeTag](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodemodetag.md)
- [MTRServiceAreaOperationalStatus](matter/mtrserviceareaoperationalstatus.md)
- [MTRServiceAreaSelectAreasStatus](matter/mtrserviceareaselectareasstatus.md)
- [MTRServiceAreaSkipAreaStatus](matter/mtrserviceareaskipareastatus.md)
- [MTRThermostatACCapacityFormat](matter/mtrthermostataccapacityformat.md)
- [MTRThermostatACCompressorType](matter/mtrthermostataccompressortype.md)
- [MTRThermostatACLouverPosition](matter/mtrthermostataclouverposition.md)
- [MTRThermostatACRefrigerantType](matter/mtrthermostatacrefrigeranttype.md)
- [MTRThermostatACType](matter/mtrthermostatactype.md)
- [MTRThermostatPresetScenario](matter/mtrthermostatpresetscenario.md)
- [MTRThermostatSetpointChangeSource](matter/mtrthermostatsetpointchangesource.md)
- [MTRThermostatStartOfWeek](matter/mtrthermostatstartofweek.md)
- [MTRThermostatTemperatureSetpointHold](matter/mtrthermostattemperaturesetpointhold.md)
- [MTRTimeSynchronizationStatusCode](matter/mtrtimesynchronizationstatuscode.md)
- [MTRTimeSynchronizationTimeZoneDatabase](matter/mtrtimesynchronizationtimezonedatabase.md)
- [MTRWaterHeaterManagementBoostState](matter/mtrwaterheatermanagementbooststate.md)
- [MTRWaterHeaterModeModeTag](matter/mtrwaterheatermodemodetag.md)

# Matter (Objective-C)

**Framework:** Matter  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Communicate with and control smart home devices from a variety of manufacturers.

<a id="overview"></a>

## Overview

The [Matter](https://csa-iot.org/all-solutions/matter/) smart home connectivity standard enables interoperability between various smart home devices and ecosystems. Use  [MatterSupport](mattersupport.md)  to bring accessories onto a local network, then commission and control those accessories using Matter.

![A diagram showing communication between Matter and non-Matter devices within a home. At the center is a Matter-enabled iOS device that connects to a Matter garage door controller on the left and a Matter light switch on the right. The Matter light switch connects to a Matter lamp controller. There are also non-Matter devices in the diagram: an outlet switch, a HomePod, and an Apple TV.](https://developer.apple.com/images/com.apple.matter/media-4199669@2x.png)

To access a Matter accessory on a network, you must commission it. Commissioning provides credentials to enable secure communication and performs initial accessory configuration. Once you commission an accessory, it exposes areas of functionality called clusters that you use to control it. For example, a light exposes the On/Off cluster to control whether it’s on or off. A dimmable light also exposes the Level Control cluster to control its brightness.

## Topics

### Matter device onboarding

- [Onboarding a Matter device](matter/onboarding-a-matter-device.md): Prepare your app to discover and control a Matter device.

### Matter device interactions

- [Controller initialization](matter/controller-initialization.md): Initialize the object that controls Matter accessories.
- [Accessory commissioning](matter/accessory-commissioning.md): Commission a Matter accessory onto a network.
- [Accessory control](matter/accessory-control.md): Communicate with commissioned Matter accessories.
- [Clusters](matter/clusters.md): Interact with groups of related functionality that Matter accessories expose.

### Reference

- [Other symbols](matter/other-symbols.md)
- [Matter Constants](matter/matter-constants.md)
- [Matter Functions](matter/matter-functions.md)

### Classes

- [MTRAccessControlClusterAccessRestrictionEntryStruct](matter/mtraccesscontrolclusteraccessrestrictionentrystruct.md)
- [MTRAccessControlClusterAccessRestrictionStruct](matter/mtraccesscontrolclusteraccessrestrictionstruct.md)
- [MTRAccessControlClusterCommissioningAccessRestrictionEntryStruct](matter/mtraccesscontrolclustercommissioningaccessrestrictionentrystruct.md)
- [MTRAccessControlClusterFabricRestrictionReviewUpdateEvent](matter/mtraccesscontrolclusterfabricrestrictionreviewupdateevent.md)
- [MTRAccessControlClusterReviewFabricRestrictionsParams](matter/mtraccesscontrolclusterreviewfabricrestrictionsparams.md)
- [MTRAccessControlClusterReviewFabricRestrictionsResponseParams](matter/mtraccesscontrolclusterreviewfabricrestrictionsresponseparams.md)
- [MTRAccountLoginClusterLoggedOutEvent](matter/mtraccountloginclusterloggedoutevent.md)
- [MTRAttributeValueWaiter](matter/mtrattributevaluewaiter.md)
- [MTRBaseClusterCommissionerControl](matter/mtrbaseclustercommissionercontrol.md): Cluster Commissioner Control
- [MTRBaseClusterContentAppObserver](matter/mtrbaseclustercontentappobserver.md): Cluster Content App Observer
- [MTRBaseClusterDeviceEnergyManagement](matter/mtrbaseclusterdeviceenergymanagement.md): Cluster Device Energy Management
- [MTRBaseClusterDeviceEnergyManagementMode](matter/mtrbaseclusterdeviceenergymanagementmode.md): Cluster Device Energy Management Mode
- [MTRBaseClusterDishwasherAlarm](matter/mtrbaseclusterdishwasheralarm.md): Cluster Dishwasher Alarm
- [MTRBaseClusterDishwasherMode](matter/mtrbaseclusterdishwashermode.md): Cluster Dishwasher Mode
- [MTRBaseClusterEnergyEVSE](matter/mtrbaseclusterenergyevse.md): Cluster Energy EVSE
- [MTRBaseClusterEnergyEVSEMode](matter/mtrbaseclusterenergyevsemode.md): Cluster Energy EVSE Mode
- [MTRBaseClusterICDManagement](matter/mtrbaseclustericdmanagement.md): Cluster ICD Management
- [MTRBaseClusterLaundryDryerControls](matter/mtrbaseclusterlaundrydryercontrols.md): Cluster Laundry Dryer Controls
- [MTRBaseClusterLaundryWasherControls](matter/mtrbaseclusterlaundrywashercontrols.md): Cluster Laundry Washer Controls
- [MTRBaseClusterLaundryWasherMode](matter/mtrbaseclusterlaundrywashermode.md): Cluster Laundry Washer Mode
- [MTRBaseClusterMessages](matter/mtrbaseclustermessages.md): Cluster Messages
- [MTRBaseClusterMicrowaveOvenControl](matter/mtrbaseclustermicrowaveovencontrol.md): Cluster Microwave Oven Control
- [MTRBaseClusterMicrowaveOvenMode](matter/mtrbaseclustermicrowaveovenmode.md): Cluster Microwave Oven Mode
- [MTRBaseClusterOvenCavityOperationalState](matter/mtrbaseclusterovencavityoperationalstate.md): Cluster Oven Cavity Operational State
- [MTRBaseClusterOvenMode](matter/mtrbaseclusterovenmode.md): Cluster Oven Mode
- [MTRBaseClusterPowerTopology](matter/mtrbaseclusterpowertopology.md): Cluster Power Topology
- [MTRBaseClusterRefrigeratorAlarm](matter/mtrbaseclusterrefrigeratoralarm.md): Cluster Refrigerator Alarm
- [MTRBaseClusterRefrigeratorAndTemperatureControlledCabinetMode](matter/mtrbaseclusterrefrigeratorandtemperaturecontrolledcabinetmode.md): Cluster Refrigerator And Temperature Controlled Cabinet Mode
- [MTRBaseClusterServiceArea](matter/mtrbaseclusterservicearea.md): Cluster Service Area
- [MTRBaseClusterTemperatureControl](matter/mtrbaseclustertemperaturecontrol.md): Cluster Temperature Control
- [MTRBaseClusterThreadBorderRouterManagement](matter/mtrbaseclusterthreadborderroutermanagement.md): Cluster Thread Border Router Management
- [MTRBaseClusterThreadNetworkDirectory](matter/mtrbaseclusterthreadnetworkdirectory.md): Cluster Thread Network Directory
- [MTRBaseClusterTimeSynchronization](matter/mtrbaseclustertimesynchronization.md): Cluster Time Synchronization
- [MTRBaseClusterWaterHeaterManagement](matter/mtrbaseclusterwaterheatermanagement.md): Cluster Water Heater Management
- [MTRBaseClusterWaterHeaterMode](matter/mtrbaseclusterwaterheatermode.md): Cluster Water Heater Mode
- [MTRBaseClusterWiFiNetworkManagement](matter/mtrbaseclusterwifinetworkmanagement.md): Cluster Wi-Fi Network Management
- [MTRBridgedDeviceBasicInformationClusterActiveChangedEvent](matter/mtrbridgeddevicebasicinformationclusteractivechangedevent.md)
- [MTRBridgedDeviceBasicInformationClusterKeepActiveParams](matter/mtrbridgeddevicebasicinformationclusterkeepactiveparams.md)
- [MTRChannelClusterCancelRecordProgramParams](matter/mtrchannelclustercancelrecordprogramparams.md)
- [MTRChannelClusterChannelPagingStruct](matter/mtrchannelclusterchannelpagingstruct.md)
- [MTRChannelClusterGetProgramGuideParams](matter/mtrchannelclustergetprogramguideparams.md)
- [MTRChannelClusterPageTokenStruct](matter/mtrchannelclusterpagetokenstruct.md)
- [MTRChannelClusterProgramCastStruct](matter/mtrchannelclusterprogramcaststruct.md)
- [MTRChannelClusterProgramCategoryStruct](matter/mtrchannelclusterprogramcategorystruct.md)
- [MTRChannelClusterProgramGuideResponseParams](matter/mtrchannelclusterprogramguideresponseparams.md)
- [MTRChannelClusterProgramStruct](matter/mtrchannelclusterprogramstruct.md)
- [MTRChannelClusterRecordProgramParams](matter/mtrchannelclusterrecordprogramparams.md)
- [MTRChannelClusterSeriesInfoStruct](matter/mtrchannelclusterseriesinfostruct.md)
- [MTRClusterCommissionerControl](matter/mtrclustercommissionercontrol.md): Cluster Commissioner Control Supports the ability for clients to request the commissioning of themselves or other nodes onto a fabric which the cluster server can commission onto.
- [MTRClusterContentAppObserver](matter/mtrclustercontentappobserver.md): Cluster Content App Observer This cluster provides an interface for sending targeted commands to an Observer of a Content App on a Video Player device such as a Streaming Media Player, Smart TV or Smart Screen. The cluster server for Content App Observer is implemented by an endpoint that communicates with a Content App, such as a Casting Video Client. The cluster client for Content App Observer is implemented by a Content App endpoint. A Content App is informed of the NodeId of an Observer when a binding is set on the Content App. The Content App can then send the ContentAppMessage to the Observer (server cluster), and the Observer responds with a ContentAppMessageResponse.
- [MTRClusterDeviceEnergyManagement](matter/mtrclusterdeviceenergymanagement.md): Cluster Device Energy Management This cluster allows a client to manage the power draw of a device. An example of such a client could be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA).
- [MTRClusterDeviceEnergyManagementMode](matter/mtrclusterdeviceenergymanagementmode.md): Cluster Device Energy Management Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterDishwasherAlarm](matter/mtrclusterdishwasheralarm.md): Cluster Dishwasher Alarm Attributes and commands for configuring the Dishwasher alarm.
- [MTRClusterDishwasherMode](matter/mtrclusterdishwashermode.md): Cluster Dishwasher Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterEnergyEVSE](matter/mtrclusterenergyevse.md): Cluster Energy EVSE Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric Vehicle Supply Equipment (EVSE) management.
- [MTRClusterEnergyEVSEMode](matter/mtrclusterenergyevsemode.md): Cluster Energy EVSE Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterICDManagement](matter/mtrclustericdmanagement.md): Cluster ICD Management Allows servers to ensure that listed clients are notified when a server is available for communication.
- [MTRClusterLaundryDryerControls](matter/mtrclusterlaundrydryercontrols.md): Cluster Laundry Dryer Controls This cluster provides a way to access options associated with the operation of a laundry dryer device type.
- [MTRClusterLaundryWasherControls](matter/mtrclusterlaundrywashercontrols.md): Cluster Laundry Washer Controls This cluster supports remotely monitoring and controlling the different types of functionality available to a washing device, such as a washing machine.
- [MTRClusterLaundryWasherMode](matter/mtrclusterlaundrywashermode.md): Cluster Laundry Washer Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterMessages](matter/mtrclustermessages.md): Cluster Messages This cluster provides an interface for passing messages to be presented by a device.
- [MTRClusterMicrowaveOvenControl](matter/mtrclustermicrowaveovencontrol.md): Cluster Microwave Oven Control Attributes and commands for configuring the microwave oven control, and reporting cooking stats.
- [MTRClusterMicrowaveOvenMode](matter/mtrclustermicrowaveovenmode.md): Cluster Microwave Oven Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterOvenCavityOperationalState](matter/mtrclusterovencavityoperationalstate.md): Cluster Oven Cavity Operational State This cluster supports remotely monitoring and, where supported, changing the operational state of an Oven.
- [MTRClusterOvenMode](matter/mtrclusterovenmode.md): Cluster Oven Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterPowerTopology](matter/mtrclusterpowertopology.md): Cluster Power Topology The Power Topology Cluster provides a mechanism for expressing how power is flowing between endpoints.
- [MTRClusterRefrigeratorAlarm](matter/mtrclusterrefrigeratoralarm.md): Cluster Refrigerator Alarm Attributes and commands for configuring the Refrigerator alarm.
- [MTRClusterRefrigeratorAndTemperatureControlledCabinetMode](matter/mtrclusterrefrigeratorandtemperaturecontrolledcabinetmode.md): Cluster Refrigerator And Temperature Controlled Cabinet Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterServiceArea](matter/mtrclusterservicearea.md): Cluster Service Area The Service Area cluster provides an interface for controlling the areas where a device should operate, and for querying the current area being serviced.
- [MTRClusterTemperatureControl](matter/mtrclustertemperaturecontrol.md): Cluster Temperature Control Attributes and commands for configuring the temperature control, and reporting temperature.
- [MTRClusterThreadBorderRouterManagement](matter/mtrclusterthreadborderroutermanagement.md): Cluster Thread Border Router Management Manage the Thread network of Thread Border Router
- [MTRClusterThreadNetworkDirectory](matter/mtrclusterthreadnetworkdirectory.md): Cluster Thread Network Directory Manages the names and credentials of Thread networks visible to the user.
- [MTRClusterTimeSynchronization](matter/mtrclustertimesynchronization.md): Cluster Time Synchronization Accurate time is required for a number of reasons, including scheduling, display and validating security materials.
- [MTRClusterWaterHeaterManagement](matter/mtrclusterwaterheatermanagement.md): Cluster Water Heater Management This cluster is used to allow clients to control the operation of a hot water heating appliance so that it can be used with energy management.
- [MTRClusterWaterHeaterMode](matter/mtrclusterwaterheatermode.md): Cluster Water Heater Mode Attributes and commands for selecting a mode from a list of supported options.
- [MTRClusterWiFiNetworkManagement](matter/mtrclusterwifinetworkmanagement.md): Cluster Wi-Fi Network Management Functionality to retrieve operational information about a managed Wi-Fi network.
- [MTRCommandWithRequiredResponse](matter/mtrcommandwithrequiredresponse.md): An object representing a single command to be invoked and the response required for the invoke to be considered successful.
- [MTRCommissioneeInfo](matter/mtrcommissioneeinfo.md): Information read from the commissionee device during commissioning.
- [MTRCommissionerControlClusterCommissionNodeParams](matter/mtrcommissionercontrolclustercommissionnodeparams.md)
- [MTRCommissionerControlClusterCommissioningRequestResultEvent](matter/mtrcommissionercontrolclustercommissioningrequestresultevent.md)
- [MTRCommissionerControlClusterRequestCommissioningApprovalParams](matter/mtrcommissionercontrolclusterrequestcommissioningapprovalparams.md)
- [MTRCommissionerControlClusterReverseOpenCommissioningWindowParams](matter/mtrcommissionercontrolclusterreverseopencommissioningwindowparams.md)
- [MTRCommissioningOperation](matter/mtrcommissioningoperation.md)
- [MTRContentAppObserverClusterContentAppMessageParams](matter/mtrcontentappobserverclustercontentappmessageparams.md)
- [MTRContentAppObserverClusterContentAppMessageResponseParams](matter/mtrcontentappobserverclustercontentappmessageresponseparams.md)
- [MTRDataTypeAtomicAttributeStatusStruct](matter/mtrdatatypeatomicattributestatusstruct.md)
- [MTRDataTypeLocationDescriptorStruct](matter/mtrdatatypelocationdescriptorstruct.md)
- [MTRDeviceEnergyManagementClusterCancelPowerAdjustRequestParams](matter/mtrdeviceenergymanagementclustercancelpoweradjustrequestparams.md)
- [MTRDeviceEnergyManagementClusterCancelRequestParams](matter/mtrdeviceenergymanagementclustercancelrequestparams.md)
- [MTRDeviceEnergyManagementClusterConstraintsStruct](matter/mtrdeviceenergymanagementclusterconstraintsstruct.md)
- [MTRDeviceEnergyManagementClusterCostStruct](matter/mtrdeviceenergymanagementclustercoststruct.md)
- [MTRDeviceEnergyManagementClusterForecastStruct](matter/mtrdeviceenergymanagementclusterforecaststruct.md)
- [MTRDeviceEnergyManagementClusterModifyForecastRequestParams](matter/mtrdeviceenergymanagementclustermodifyforecastrequestparams.md)
- [MTRDeviceEnergyManagementClusterPauseRequestParams](matter/mtrdeviceenergymanagementclusterpauserequestparams.md)
- [MTRDeviceEnergyManagementClusterPausedEvent](matter/mtrdeviceenergymanagementclusterpausedevent.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustCapabilityStruct](matter/mtrdeviceenergymanagementclusterpoweradjustcapabilitystruct.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustEndEvent](matter/mtrdeviceenergymanagementclusterpoweradjustendevent.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustRequestParams](matter/mtrdeviceenergymanagementclusterpoweradjustrequestparams.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustStartEvent](matter/mtrdeviceenergymanagementclusterpoweradjuststartevent.md)
- [MTRDeviceEnergyManagementClusterPowerAdjustStruct](matter/mtrdeviceenergymanagementclusterpoweradjuststruct.md)
- [MTRDeviceEnergyManagementClusterRequestConstraintBasedForecastParams](matter/mtrdeviceenergymanagementclusterrequestconstraintbasedforecastparams.md)
- [MTRDeviceEnergyManagementClusterResumeRequestParams](matter/mtrdeviceenergymanagementclusterresumerequestparams.md)
- [MTRDeviceEnergyManagementClusterResumedEvent](matter/mtrdeviceenergymanagementclusterresumedevent.md)
- [MTRDeviceEnergyManagementClusterSlotAdjustmentStruct](matter/mtrdeviceenergymanagementclusterslotadjustmentstruct.md)
- [MTRDeviceEnergyManagementClusterSlotStruct](matter/mtrdeviceenergymanagementclusterslotstruct.md)
- [MTRDeviceEnergyManagementClusterStartTimeAdjustRequestParams](matter/mtrdeviceenergymanagementclusterstarttimeadjustrequestparams.md)
- [MTRDeviceEnergyManagementModeClusterChangeToModeParams](matter/mtrdeviceenergymanagementmodeclusterchangetomodeparams.md)
- [MTRDeviceEnergyManagementModeClusterChangeToModeResponseParams](matter/mtrdeviceenergymanagementmodeclusterchangetomoderesponseparams.md)
- [MTRDeviceEnergyManagementModeClusterModeOptionStruct](matter/mtrdeviceenergymanagementmodeclustermodeoptionstruct.md)
- [MTRDeviceEnergyManagementModeClusterModeTagStruct](matter/mtrdeviceenergymanagementmodeclustermodetagstruct.md)
- [MTRDeviceType](matter/mtrdevicetype.md): Meta-data about a device type defined in the Matter specification.
- [MTRDishwasherAlarmClusterModifyEnabledAlarmsParams](matter/mtrdishwasheralarmclustermodifyenabledalarmsparams.md)
- [MTRDishwasherAlarmClusterNotifyEvent](matter/mtrdishwasheralarmclusternotifyevent.md)
- [MTRDishwasherAlarmClusterResetParams](matter/mtrdishwasheralarmclusterresetparams.md)
- [MTRDishwasherModeClusterChangeToModeParams](matter/mtrdishwashermodeclusterchangetomodeparams.md)
- [MTRDishwasherModeClusterChangeToModeResponseParams](matter/mtrdishwashermodeclusterchangetomoderesponseparams.md)
- [MTRDishwasherModeClusterModeOptionStruct](matter/mtrdishwashermodeclustermodeoptionstruct.md)
- [MTRDishwasherModeClusterModeTagStruct](matter/mtrdishwashermodeclustermodetagstruct.md)
- [MTRDoorLockClusterClearAliroReaderConfigParams](matter/mtrdoorlockclusterclearaliroreaderconfigparams.md)
- [MTRDoorLockClusterSetAliroReaderConfigParams](matter/mtrdoorlockclustersetaliroreaderconfigparams.md)
- [MTRDoorLockClusterUnboltDoorParams](matter/mtrdoorlockclusterunboltdoorparams.md)
- [MTRElectricalEnergyMeasurementClusterMeasurementAccuracyRangeStruct](matter/mtrelectricalenergymeasurementclustermeasurementaccuracyrangestruct.md)
- [MTREndpointInfo](matter/mtrendpointinfo.md): Meta-data about an endpoint of a Matter node.
- [MTREnergyEVSEClusterChargingTargetScheduleStruct](matter/mtrenergyevseclusterchargingtargetschedulestruct.md)
- [MTREnergyEVSEClusterChargingTargetStruct](matter/mtrenergyevseclusterchargingtargetstruct.md)
- [MTREnergyEVSEClusterClearTargetsParams](matter/mtrenergyevseclustercleartargetsparams.md)
- [MTREnergyEVSEClusterDisableParams](matter/mtrenergyevseclusterdisableparams.md)
- [MTREnergyEVSEClusterEVConnectedEvent](matter/mtrenergyevseclusterevconnectedevent.md)
- [MTREnergyEVSEClusterEVNotDetectedEvent](matter/mtrenergyevseclusterevnotdetectedevent.md)
- [MTREnergyEVSEClusterEnableChargingParams](matter/mtrenergyevseclusterenablechargingparams.md)
- [MTREnergyEVSEClusterEnergyTransferStartedEvent](matter/mtrenergyevseclusterenergytransferstartedevent.md)
- [MTREnergyEVSEClusterEnergyTransferStoppedEvent](matter/mtrenergyevseclusterenergytransferstoppedevent.md)
- [MTREnergyEVSEClusterFaultEvent](matter/mtrenergyevseclusterfaultevent.md)
- [MTREnergyEVSEClusterGetTargetsParams](matter/mtrenergyevseclustergettargetsparams.md)
- [MTREnergyEVSEClusterGetTargetsResponseParams](matter/mtrenergyevseclustergettargetsresponseparams.md)
- [MTREnergyEVSEClusterRFIDEvent](matter/mtrenergyevseclusterrfidevent.md)
- [MTREnergyEVSEClusterSetTargetsParams](matter/mtrenergyevseclustersettargetsparams.md)
- [MTREnergyEVSEClusterStartDiagnosticsParams](matter/mtrenergyevseclusterstartdiagnosticsparams.md)
- [MTREnergyEVSEModeClusterChangeToModeParams](matter/mtrenergyevsemodeclusterchangetomodeparams.md)
- [MTREnergyEVSEModeClusterChangeToModeResponseParams](matter/mtrenergyevsemodeclusterchangetomoderesponseparams.md)
- [MTREnergyEVSEModeClusterModeOptionStruct](matter/mtrenergyevsemodeclustermodeoptionstruct.md)
- [MTREnergyEVSEModeClusterModeTagStruct](matter/mtrenergyevsemodeclustermodetagstruct.md)
- [MTRGeneralDiagnosticsClusterPayloadTestRequestParams](matter/mtrgeneraldiagnosticsclusterpayloadtestrequestparams.md)
- [MTRGeneralDiagnosticsClusterPayloadTestResponseParams](matter/mtrgeneraldiagnosticsclusterpayloadtestresponseparams.md)
- [MTRGeneralDiagnosticsClusterTimeSnapshotParams](matter/mtrgeneraldiagnosticsclustertimesnapshotparams.md)
- [MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams](matter/mtrgeneraldiagnosticsclustertimesnapshotresponseparams.md)
- [MTRICDManagementClusterMonitoringRegistrationStruct](matter/mtricdmanagementclustermonitoringregistrationstruct.md)
- [MTRICDManagementClusterRegisterClientParams](matter/mtricdmanagementclusterregisterclientparams.md)
- [MTRICDManagementClusterRegisterClientResponseParams](matter/mtricdmanagementclusterregisterclientresponseparams.md)
- [MTRICDManagementClusterStayActiveRequestParams](matter/mtricdmanagementclusterstayactiverequestparams.md)
- [MTRICDManagementClusterStayActiveResponseParams](matter/mtricdmanagementclusterstayactiveresponseparams.md)
- [MTRICDManagementClusterUnregisterClientParams](matter/mtricdmanagementclusterunregisterclientparams.md)
- [MTRLaundryWasherModeClusterChangeToModeParams](matter/mtrlaundrywashermodeclusterchangetomodeparams.md)
- [MTRLaundryWasherModeClusterChangeToModeResponseParams](matter/mtrlaundrywashermodeclusterchangetomoderesponseparams.md)
- [MTRLaundryWasherModeClusterModeOptionStruct](matter/mtrlaundrywashermodeclustermodeoptionstruct.md)
- [MTRLaundryWasherModeClusterModeTagStruct](matter/mtrlaundrywashermodeclustermodetagstruct.md)
- [MTRMediaPlaybackClusterActivateAudioTrackParams](matter/mtrmediaplaybackclusteractivateaudiotrackparams.md)
- [MTRMediaPlaybackClusterActivateTextTrackParams](matter/mtrmediaplaybackclusteractivatetexttrackparams.md)
- [MTRMediaPlaybackClusterDeactivateTextTrackParams](matter/mtrmediaplaybackclusterdeactivatetexttrackparams.md)
- [MTRMediaPlaybackClusterStateChangedEvent](matter/mtrmediaplaybackclusterstatechangedevent.md)
- [MTRMessagesClusterCancelMessagesRequestParams](matter/mtrmessagesclustercancelmessagesrequestparams.md)
- [MTRMessagesClusterMessageCompleteEvent](matter/mtrmessagesclustermessagecompleteevent.md)
- [MTRMessagesClusterMessagePresentedEvent](matter/mtrmessagesclustermessagepresentedevent.md)
- [MTRMessagesClusterMessageQueuedEvent](matter/mtrmessagesclustermessagequeuedevent.md)
- [MTRMessagesClusterMessageResponseOptionStruct](matter/mtrmessagesclustermessageresponseoptionstruct.md)
- [MTRMessagesClusterMessageStruct](matter/mtrmessagesclustermessagestruct.md)
- [MTRMessagesClusterPresentMessagesRequestParams](matter/mtrmessagesclusterpresentmessagesrequestparams.md)
- [MTRMicrowaveOvenControlClusterAddMoreTimeParams](matter/mtrmicrowaveovencontrolclusteraddmoretimeparams.md)
- [MTRMicrowaveOvenControlClusterSetCookingParametersParams](matter/mtrmicrowaveovencontrolclustersetcookingparametersparams.md)
- [MTRMicrowaveOvenModeClusterModeOptionStruct](matter/mtrmicrowaveovenmodeclustermodeoptionstruct.md)
- [MTRMicrowaveOvenModeClusterModeTagStruct](matter/mtrmicrowaveovenmodeclustermodetagstruct.md)
- [MTROccupancySensingClusterHoldTimeLimitsStruct](matter/mtroccupancysensingclusterholdtimelimitsstruct.md)
- [MTROccupancySensingClusterOccupancyChangedEvent](matter/mtroccupancysensingclusteroccupancychangedevent.md)
- [MTROvenCavityOperationalStateClusterErrorStateStruct](matter/mtrovencavityoperationalstateclustererrorstatestruct.md)
- [MTROvenCavityOperationalStateClusterOperationCompletionEvent](matter/mtrovencavityoperationalstateclusteroperationcompletionevent.md)
- [MTROvenCavityOperationalStateClusterOperationalCommandResponseParams](matter/mtrovencavityoperationalstateclusteroperationalcommandresponseparams.md)
- [MTROvenCavityOperationalStateClusterOperationalErrorEvent](matter/mtrovencavityoperationalstateclusteroperationalerrorevent.md)
- [MTROvenCavityOperationalStateClusterOperationalStateStruct](matter/mtrovencavityoperationalstateclusteroperationalstatestruct.md)
- [MTROvenCavityOperationalStateClusterStartParams](matter/mtrovencavityoperationalstateclusterstartparams.md)
- [MTROvenCavityOperationalStateClusterStopParams](matter/mtrovencavityoperationalstateclusterstopparams.md)
- [MTROvenModeClusterChangeToModeParams](matter/mtrovenmodeclusterchangetomodeparams.md)
- [MTROvenModeClusterChangeToModeResponseParams](matter/mtrovenmodeclusterchangetomoderesponseparams.md)
- [MTROvenModeClusterModeOptionStruct](matter/mtrovenmodeclustermodeoptionstruct.md)
- [MTROvenModeClusterModeTagStruct](matter/mtrovenmodeclustermodetagstruct.md)
- [MTRRVCOperationalStateClusterGoHomeParams](matter/mtrrvcoperationalstateclustergohomeparams.md)
- [MTRRefrigeratorAlarmClusterNotifyEvent](matter/mtrrefrigeratoralarmclusternotifyevent.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterChangeToModeParams](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclusterchangetomodeparams.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterChangeToModeResponseParams](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclusterchangetomoderesponseparams.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterModeOptionStruct](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclustermodeoptionstruct.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeClusterModeTagStruct](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodeclustermodetagstruct.md)
- [MTRServiceAreaClusterAreaInfoStruct](matter/mtrserviceareaclusterareainfostruct.md)
- [MTRServiceAreaClusterAreaStruct](matter/mtrserviceareaclusterareastruct.md)
- [MTRServiceAreaClusterLandmarkInfoStruct](matter/mtrserviceareaclusterlandmarkinfostruct.md)
- [MTRServiceAreaClusterMapStruct](matter/mtrserviceareaclustermapstruct.md)
- [MTRServiceAreaClusterProgressStruct](matter/mtrserviceareaclusterprogressstruct.md)
- [MTRServiceAreaClusterSelectAreasParams](matter/mtrserviceareaclusterselectareasparams.md)
- [MTRServiceAreaClusterSelectAreasResponseParams](matter/mtrserviceareaclusterselectareasresponseparams.md)
- [MTRServiceAreaClusterSkipAreaParams](matter/mtrserviceareaclusterskipareaparams.md)
- [MTRServiceAreaClusterSkipAreaResponseParams](matter/mtrserviceareaclusterskiparearesponseparams.md)
- [MTRTargetNavigatorClusterTargetUpdatedEvent](matter/mtrtargetnavigatorclustertargetupdatedevent.md)
- [MTRTemperatureControlClusterSetTemperatureParams](matter/mtrtemperaturecontrolclustersettemperatureparams.md)
- [MTRThermostatClusterAtomicRequestParams](matter/mtrthermostatclusteratomicrequestparams.md)
- [MTRThermostatClusterAtomicResponseParams](matter/mtrthermostatclusteratomicresponseparams.md)
- [MTRThermostatClusterPresetStruct](matter/mtrthermostatclusterpresetstruct.md)
- [MTRThermostatClusterPresetTypeStruct](matter/mtrthermostatclusterpresettypestruct.md)
- [MTRThermostatClusterScheduleStruct](matter/mtrthermostatclusterschedulestruct.md)
- [MTRThermostatClusterScheduleTransitionStruct](matter/mtrthermostatclusterscheduletransitionstruct.md)
- [MTRThermostatClusterScheduleTypeStruct](matter/mtrthermostatclusterscheduletypestruct.md)
- [MTRThermostatClusterSetActivePresetRequestParams](matter/mtrthermostatclustersetactivepresetrequestparams.md)
- [MTRThermostatClusterSetActiveScheduleRequestParams](matter/mtrthermostatclustersetactiveschedulerequestparams.md)
- [MTRThreadBorderRouterManagementClusterDatasetResponseParams](matter/mtrthreadborderroutermanagementclusterdatasetresponseparams.md)
- [MTRThreadBorderRouterManagementClusterGetActiveDatasetRequestParams](matter/mtrthreadborderroutermanagementclustergetactivedatasetrequestparams.md)
- [MTRThreadBorderRouterManagementClusterGetPendingDatasetRequestParams](matter/mtrthreadborderroutermanagementclustergetpendingdatasetrequestparams.md)
- [MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams](matter/mtrthreadborderroutermanagementclustersetactivedatasetrequestparams.md)
- [MTRThreadBorderRouterManagementClusterSetPendingDatasetRequestParams](matter/mtrthreadborderroutermanagementclustersetpendingdatasetrequestparams.md)
- [MTRThreadNetworkDirectoryClusterAddNetworkParams](matter/mtrthreadnetworkdirectoryclusteraddnetworkparams.md)
- [MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams](matter/mtrthreadnetworkdirectoryclustergetoperationaldatasetparams.md)
- [MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams](matter/mtrthreadnetworkdirectoryclusteroperationaldatasetresponseparams.md)
- [MTRThreadNetworkDirectoryClusterRemoveNetworkParams](matter/mtrthreadnetworkdirectoryclusterremovenetworkparams.md)
- [MTRThreadNetworkDirectoryClusterThreadNetworkStruct](matter/mtrthreadnetworkdirectoryclusterthreadnetworkstruct.md)
- [MTRTimeSynchronizationClusterDSTStatusEvent](matter/mtrtimesynchronizationclusterdststatusevent.md)
- [MTRTimeSynchronizationClusterDSTTableEmptyEvent](matter/mtrtimesynchronizationclusterdsttableemptyevent.md)
- [MTRTimeSynchronizationClusterFabricScopedTrustedTimeSourceStruct](matter/mtrtimesynchronizationclusterfabricscopedtrustedtimesourcestruct.md)
- [MTRTimeSynchronizationClusterMissingTrustedTimeSourceEvent](matter/mtrtimesynchronizationclustermissingtrustedtimesourceevent.md)
- [MTRTimeSynchronizationClusterSetDSTOffsetParams](matter/mtrtimesynchronizationclustersetdstoffsetparams.md)
- [MTRTimeSynchronizationClusterSetDefaultNTPParams](matter/mtrtimesynchronizationclustersetdefaultntpparams.md)
- [MTRTimeSynchronizationClusterSetTimeZoneParams](matter/mtrtimesynchronizationclustersettimezoneparams.md)
- [MTRTimeSynchronizationClusterSetTimeZoneResponseParams](matter/mtrtimesynchronizationclustersettimezoneresponseparams.md)
- [MTRTimeSynchronizationClusterSetTrustedTimeSourceParams](matter/mtrtimesynchronizationclustersettrustedtimesourceparams.md)
- [MTRTimeSynchronizationClusterTimeFailureEvent](matter/mtrtimesynchronizationclustertimefailureevent.md)
- [MTRTimeSynchronizationClusterTimeZoneStatusEvent](matter/mtrtimesynchronizationclustertimezonestatusevent.md)
- [MTRTimeSynchronizationClusterTrustedTimeSourceStruct](matter/mtrtimesynchronizationclustertrustedtimesourcestruct.md)
- [MTRWaterHeaterManagementClusterBoostEndedEvent](matter/mtrwaterheatermanagementclusterboostendedevent.md)
- [MTRWaterHeaterManagementClusterBoostParams](matter/mtrwaterheatermanagementclusterboostparams.md)
- [MTRWaterHeaterManagementClusterBoostStartedEvent](matter/mtrwaterheatermanagementclusterbooststartedevent.md)
- [MTRWaterHeaterManagementClusterCancelBoostParams](matter/mtrwaterheatermanagementclustercancelboostparams.md)
- [MTRWaterHeaterManagementClusterWaterHeaterBoostInfoStruct](matter/mtrwaterheatermanagementclusterwaterheaterboostinfostruct.md)
- [MTRWaterHeaterModeClusterChangeToModeParams](matter/mtrwaterheatermodeclusterchangetomodeparams.md)
- [MTRWaterHeaterModeClusterChangeToModeResponseParams](matter/mtrwaterheatermodeclusterchangetomoderesponseparams.md)
- [MTRWaterHeaterModeClusterModeOptionStruct](matter/mtrwaterheatermodeclustermodeoptionstruct.md)
- [MTRWaterHeaterModeClusterModeTagStruct](matter/mtrwaterheatermodeclustermodetagstruct.md)
- [MTRWiFiNetworkManagementClusterNetworkPassphraseRequestParams](matter/mtrwifinetworkmanagementclusternetworkpassphraserequestparams.md)
- [MTRWiFiNetworkManagementClusterNetworkPassphraseResponseParams](matter/mtrwifinetworkmanagementclusternetworkpassphraseresponseparams.md)
- [MTRXPCDeviceControllerParameters](matter/mtrxpcdevicecontrollerparameters.md)

### Protocols

- [MTRCommissioningDelegate](matter/mtrcommissioningdelegate.md)
- [MTRXPCClientProtocol](matter/mtrxpcclientprotocol.md)
- [MTRXPCClientProtocol_MTRDevice](matter/mtrxpcclientprotocol_mtrdevice.md)
- [MTRXPCClientProtocol_MTRDeviceController](matter/mtrxpcclientprotocol_mtrdevicecontroller.md)
- [MTRXPCServerProtocol](matter/mtrxpcserverprotocol.md)
- [MTRXPCServerProtocol_MTRDevice](matter/mtrxpcserverprotocol_mtrdevice.md)
- [MTRXPCServerProtocol_MTRDeviceController](matter/mtrxpcserverprotocol_mtrdevicecontroller.md)

### Variables

- [MTRCommissioningSessionTransportType](matter/mtrcommissioningsessiontransporttype.md)
- [MTRDeviceControllerRegistrationControllerCompressedFabricIDKey](matter/mtrdevicecontrollerregistrationcontrollercompressedfabricidkey.md)
- [MTRDeviceControllerRegistrationControllerContextKey](matter/mtrdevicecontrollerregistrationcontrollercontextkey.md)
- [MTRDeviceControllerRegistrationControllerIsRunningKey](matter/mtrdevicecontrollerregistrationcontrollerisrunningkey.md)
- [MTRDeviceControllerRegistrationControllerNodeIDKey](matter/mtrdevicecontrollerregistrationcontrollernodeidkey.md)
- [MTRDeviceControllerRegistrationDeviceInternalStateKey](matter/mtrdevicecontrollerregistrationdeviceinternalstatekey.md)
- [MTRDeviceControllerRegistrationNodeIDKey](matter/mtrdevicecontrollerregistrationnodeidkey.md)
- [MTRDeviceControllerRegistrationNodeIDsKey](matter/mtrdevicecontrollerregistrationnodeidskey.md)
- [MTRUnpoweredInitialPhase](matter/mtrunpoweredinitialphase.md)

### Functions

- [MTREventNameForID](matter/mtreventnameforid%28____%29.md): Resolve Matter event IDs into a descriptive string.
- [MTRRequestCommandNameForID](matter/mtrrequestcommandnameforid%28____%29.md): Resolve Matter request (client to server) command IDs into a descriptive string.
- [MTRResponseCommandNameForID](matter/mtrresponsecommandnameforid%28____%29.md): Resolve Matter response (server to client) command IDs into a descriptive string.

### Macros

- [MTRMaxErrorCode](matter/mtrmaxerrorcode.md)
- [MTR_AVAILABLE](matter/mtr_available.md)
- [MTR_DEPRECATED](matter/mtr_deprecated.md)
- [MTR_DEPRECATED_WITH_REPLACEMENT](matter/mtr_deprecated_with_replacement.md)
- [MTR_EXPORT](matter/mtr_export.md)
- [MTR_EXTERN](matter/mtr_extern.md)
- [MTR_NEWLY_AVAILABLE](matter/mtr_newly_available.md)
- [MTR_NEWLY_DEPRECATED](matter/mtr_newly_deprecated.md)
- [MTR_PROVISIONALLY_AVAILABLE](matter/mtr_provisionally_available.md)
- [MTR_SWIFT_DISFAVORED_OVERLOAD](matter/mtr_swift_disfavored_overload.md)
- [MTR_UNSTABLE_API](matter/mtr_unstable_api.md)

### Enumerations

- [MTRAccessControlAccessRestrictionType](matter/mtraccesscontrolaccessrestrictiontype.md)
- [MTRAccessControlFeature](matter/mtraccesscontrolfeature.md)
- [MTRBridgedDeviceBasicInformationFeature](matter/mtrbridgeddevicebasicinformationfeature.md)
- [MTRChannelRecordingFlagBitmap](matter/mtrchannelrecordingflagbitmap.md)
- [MTRChannelType](matter/mtrchanneltype.md)
- [MTRColorControlColorCapabilitiesBitmap](matter/mtrcolorcontrolcolorcapabilitiesbitmap.md)
- [MTRColorControlDirection](matter/mtrcolorcontroldirection.md)
- [MTRColorControlDriftCompensation](matter/mtrcolorcontroldriftcompensation.md)
- [MTRColorControlEnhancedColorMode](matter/mtrcolorcontrolenhancedcolormode.md)
- [MTRColorControlMoveMode](matter/mtrcolorcontrolmovemode.md)
- [MTRColorControlOptionsBitmap](matter/mtrcolorcontroloptionsbitmap.md)
- [MTRColorControlStepMode](matter/mtrcolorcontrolstepmode.md)
- [MTRColorControlUpdateFlagsBitmap](matter/mtrcolorcontrolupdateflagsbitmap.md)
- [MTRCommissionerControlSupportedDeviceCategoryBitmap](matter/mtrcommissionercontrolsupporteddevicecategorybitmap.md)
- [MTRContentAppObserverStatus](matter/mtrcontentappobserverstatus.md)
- [MTRDataTypeAtomicRequestTypeEnum](matter/mtrdatatypeatomicrequesttypeenum.md)
- [MTRDataTypeLandmarkTag](matter/mtrdatatypelandmarktag.md)
- [MTRDataTypePositionTag](matter/mtrdatatypepositiontag.md)
- [MTRDataTypeRelativePositionTag](matter/mtrdatatyperelativepositiontag.md)
- [MTRDeviceEnergyManagementAdjustmentCause](matter/mtrdeviceenergymanagementadjustmentcause.md)
- [MTRDeviceEnergyManagementCause](matter/mtrdeviceenergymanagementcause.md)
- [MTRDeviceEnergyManagementCostType](matter/mtrdeviceenergymanagementcosttype.md)
- [MTRDeviceEnergyManagementESAState](matter/mtrdeviceenergymanagementesastate.md)
- [MTRDeviceEnergyManagementESAType](matter/mtrdeviceenergymanagementesatype.md)
- [MTRDeviceEnergyManagementFeature](matter/mtrdeviceenergymanagementfeature.md)
- [MTRDeviceEnergyManagementForecastUpdateReason](matter/mtrdeviceenergymanagementforecastupdatereason.md)
- [MTRDeviceEnergyManagementModeModeTag](matter/mtrdeviceenergymanagementmodemodetag.md)
- [MTRDeviceEnergyManagementOptOutState](matter/mtrdeviceenergymanagementoptoutstate.md)
- [MTRDeviceEnergyManagementPowerAdjustReason](matter/mtrdeviceenergymanagementpoweradjustreason.md)
- [MTRDeviceTypeIDType](matter/mtrdevicetypeidtype.md)
- [MTRDishwasherAlarmAlarmBitmap](matter/mtrdishwasheralarmalarmbitmap.md)
- [MTRDishwasherAlarmFeature](matter/mtrdishwasheralarmfeature.md)
- [MTRDishwasherModeModeTag](matter/mtrdishwashermodemodetag.md)
- [MTRElectricalEnergyMeasurementMeasurementType](matter/mtrelectricalenergymeasurementmeasurementtype.md)
- [MTREnergyEVSEEnergyTransferStoppedReason](matter/mtrenergyevseenergytransferstoppedreason.md)
- [MTREnergyEVSEFaultState](matter/mtrenergyevsefaultstate.md)
- [MTREnergyEVSEFeature](matter/mtrenergyevsefeature.md)
- [MTREnergyEVSEModeModeTag](matter/mtrenergyevsemodemodetag.md)
- [MTREnergyEVSEState](matter/mtrenergyevsestate.md)
- [MTREnergyEVSESupplyState](matter/mtrenergyevsesupplystate.md)
- [MTREnergyEVSETargetDayOfWeekBitmap](matter/mtrenergyevsetargetdayofweekbitmap.md)
- [MTRGeneralDiagnosticsFeature](matter/mtrgeneraldiagnosticsfeature.md)
- [MTRICDManagementClientType](matter/mtricdmanagementclienttype.md)
- [MTRICDManagementFeature](matter/mtricdmanagementfeature.md)
- [MTRICDManagementOperatingMode](matter/mtricdmanagementoperatingmode.md)
- [MTRICDManagementUserActiveModeTriggerBitmap](matter/mtricdmanagementuseractivemodetriggerbitmap.md)
- [MTRLaundryDryerControlsDrynessLevel](matter/mtrlaundrydryercontrolsdrynesslevel.md)
- [MTRLaundryWasherControlsFeature](matter/mtrlaundrywashercontrolsfeature.md)
- [MTRLaundryWasherControlsNumberOfRinses](matter/mtrlaundrywashercontrolsnumberofrinses.md)
- [MTRLaundryWasherModeModeTag](matter/mtrlaundrywashermodemodetag.md)
- [MTRMediaPlaybackCharacteristic](matter/mtrmediaplaybackcharacteristic.md)
- [MTRMessagesFeature](matter/mtrmessagesfeature.md)
- [MTRMessagesFutureMessagePreference](matter/mtrmessagesfuturemessagepreference.md)
- [MTRMessagesMessageControlBitmap](matter/mtrmessagesmessagecontrolbitmap.md)
- [MTRMessagesMessagePriority](matter/mtrmessagesmessagepriority.md)
- [MTRMicrowaveOvenControlFeature](matter/mtrmicrowaveovencontrolfeature.md)
- [MTRMicrowaveOvenModeModeTag](matter/mtrmicrowaveovenmodemodetag.md)
- [MTRNetworkCommissioningThreadCapabilitiesBitmap](matter/mtrnetworkcommissioningthreadcapabilitiesbitmap.md)
- [MTROccupancySensingFeature](matter/mtroccupancysensingfeature.md)
- [MTROvenCavityOperationalStateErrorState](matter/mtrovencavityoperationalstateerrorstate.md)
- [MTROvenCavityOperationalStateOperationalState](matter/mtrovencavityoperationalstateoperationalstate.md)
- [MTROvenModeModeTag](matter/mtrovenmodemodetag.md)
- [MTRPowerTopologyFeature](matter/mtrpowertopologyfeature.md)
- [MTRRefrigeratorAlarmAlarmBitmap](matter/mtrrefrigeratoralarmalarmbitmap.md)
- [MTRRefrigeratorAndTemperatureControlledCabinetModeModeTag](matter/mtrrefrigeratorandtemperaturecontrolledcabinetmodemodetag.md)
- [MTRServiceAreaFeature](matter/mtrserviceareafeature.md)
- [MTRServiceAreaOperationalStatus](matter/mtrserviceareaoperationalstatus.md)
- [MTRServiceAreaSelectAreasStatus](matter/mtrserviceareaselectareasstatus.md)
- [MTRServiceAreaSkipAreaStatus](matter/mtrserviceareaskipareastatus.md)
- [MTRTemperatureControlFeature](matter/mtrtemperaturecontrolfeature.md)
- [MTRThermostatACCapacityFormat](matter/mtrthermostataccapacityformat.md)
- [MTRThermostatACCompressorType](matter/mtrthermostataccompressortype.md)
- [MTRThermostatACErrorCodeBitmap](matter/mtrthermostatacerrorcodebitmap.md)
- [MTRThermostatACLouverPosition](matter/mtrthermostataclouverposition.md)
- [MTRThermostatACRefrigerantType](matter/mtrthermostatacrefrigeranttype.md)
- [MTRThermostatACType](matter/mtrthermostatactype.md)
- [MTRThermostatHVACSystemTypeBitmap](matter/mtrthermostathvacsystemtypebitmap.md)
- [MTRThermostatOccupancyBitmap](matter/mtrthermostatoccupancybitmap.md)
- [MTRThermostatPresetScenario](matter/mtrthermostatpresetscenario.md)
- [MTRThermostatPresetTypeFeaturesBitmap](matter/mtrthermostatpresettypefeaturesbitmap.md)
- [MTRThermostatProgrammingOperationModeBitmap](matter/mtrthermostatprogrammingoperationmodebitmap.md)
- [MTRThermostatRelayStateBitmap](matter/mtrthermostatrelaystatebitmap.md)
- [MTRThermostatRemoteSensingBitmap](matter/mtrthermostatremotesensingbitmap.md)
- [MTRThermostatScheduleTypeFeaturesBitmap](matter/mtrthermostatscheduletypefeaturesbitmap.md)
- [MTRThermostatSetpointChangeSource](matter/mtrthermostatsetpointchangesource.md)
- [MTRThermostatStartOfWeek](matter/mtrthermostatstartofweek.md)
- [MTRThermostatTemperatureSetpointHold](matter/mtrthermostattemperaturesetpointhold.md)
- [MTRThreadBorderRouterManagementFeature](matter/mtrthreadborderroutermanagementfeature.md)
- [MTRTimeSynchronizationFeature](matter/mtrtimesynchronizationfeature.md)
- [MTRTimeSynchronizationStatusCode](matter/mtrtimesynchronizationstatuscode.md)
- [MTRTimeSynchronizationTimeZoneDatabase](matter/mtrtimesynchronizationtimezonedatabase.md)
- [MTRWaterHeaterManagementBoostState](matter/mtrwaterheatermanagementbooststate.md)
- [MTRWaterHeaterManagementFeature](matter/mtrwaterheatermanagementfeature.md)
- [MTRWaterHeaterManagementWaterHeaterHeatSourceBitmap](matter/mtrwaterheatermanagementwaterheaterheatsourcebitmap.md)
- [MTRWaterHeaterModeModeTag](matter/mtrwaterheatermodemodetag.md)
