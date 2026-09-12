> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/enum_(unnamed)-5fh3s](https://developer.apple.com/documentation/professional_video_applications/enum_(unnamed)-5fh3s)

# enum (unnamed)

**Interface language:** Objective-C

**Framework:** Professional Video Applications  
**Kind:** Enumeration

Errors returned by plug-in hosts applications.

## Declaration

```objectivec
enum: unsigned int;
```

## Topics

### Constants

- [kFxError_AnalysisError](kfxerror_analysiserror.md): An error with analysis occurred.
- [kFxError_AnalysisExtensionNotFound](kfxerror_analysisextensionnotfound.md): An error that indicates Analysis extension is not found.
- [kFxError_APIUnavailable](kfxerror_apiunavailable.md): An error that indicates that the requested API cannot be used by the plug-in at this time.
- [kFxError_CommandNotProcessed](kfxerror_commandnotprocessed.md): An error that indicates that the command sent to the `FxCommandAPI` is unable to complete.
- [kFxError_HostUnreachable](kfxerror_hostunreachable.md): An error that indicates that the host application cannot be reached to complete an operation.
- [kFxError_InvalidColorGamut](kfxerror_invalidcolorgamut.md): An Error that indicates that an attempt to get color gamut info from the host failed.
- [kFxError_InvalidDataLength](kfxerror_invaliddatalength.md): An error that indicates an invalid data length was found by the plug-in while the host or framework was decoding data.
- [kFxError_InvalidKeyframeIndex](kfxerror_invalidkeyframeindex.md): An error that indicates that the plug-in passed an invalid keyframe index to the host.
- [kFxError_InvalidLightAccess](kfxerror_invalidlightaccess.md): An error that indicates that an attempt was made by the plug-in to access lights without first requesting light access.
- [kFxError_InvalidParameter](kfxerror_invalidparameter.md): An error that indicates that a parameter sent by the caller to an API method was invalid.
- [kFxError_InvalidParameterChannelIndex](kfxerror_invalidparameterchannelindex.md): An error that indicates that the plug-in passed an invalid channel number for a parameter to the host.
- [kFxError_InvalidParameterID](kfxerror_invalidparameterid.md): An error that indicates that the plug-in passed an invalid parameter to the host.
- [kFxError_InvalidPathID](kfxerror_invalidpathid.md): An error that indicates that no path with that ID exists.
- [kFxError_InvalidPathIndex](kfxerror_invalidpathindex.md): An error that indicates that the index is greater than the number of paths.
- [kFxError_InvalidPaths](kfxerror_invalidpaths.md): An error that indicates that an attempt to get path info from the host failed.
- [kFxError_InvalidPathStyle](kfxerror_invalidpathstyle.md): An error that indicates that an invalid path style was used by the plug-in.
- [kFxError_InvalidSegmentIndex](kfxerror_invalidsegmentindex.md): An error that indicates that the index of the segment of the path is greater than the number of segments in the path.
- [kFxError_InvalidTime](kfxerror_invalidtime.md): An error that indicates that the plug-in passed an invalid time to the host.
- [kFxError_InvalidTiming](kfxerror_invalidtiming.md): An error that indicates that an attempt to get timing info from the host failed.
- [kFxError_LostConnectionToPlugin](kfxerror_lostconnectiontoplugin.md): An error that indicates that the connection between the host and the plug-in was lost.
- [kFxError_MemoryNotAllocated](kfxerror_memorynotallocated.md): An error that indicates unable to free a memory resource because it is not allocated.
- [kFxError_NoDocumentFound](kfxerror_nodocumentfound.md): An error that indicates that the FxPlug is not in a project.
- [kFxError_NoMediaFolder](kfxerror_nomediafolder.md): An error that indicates that the project has no media folder.
- [kFxError_NotYetImplemented](kfxerror_notyetimplemented.md): An error that indicates that the host application has not yet implemented the API.
- [kFxError_NoViewFound](kfxerror_noviewfound.md): An error that indicates that a constant that indicates the remote window view wasn’t retrieved by the host.
- [kFxError_OpenGLError](kfxerror_openglerror.md): An error that indicates that OpenGL returned an error.
- [kFxError_OutOfMemory](kfxerror_outofmemory.md): An error that indicates unable to allocate memory.
- [kFxError_PluginNotFound](kfxerror_pluginnotfound.md): An error that indicates that the host couldn’t find the plug-in.
- [kFxError_Success](kfxerror_success.md): No error occurred.
- [kFxError_ThirdPartyDeveloperStart](kfxerror_thirdpartydeveloperstart.md): All third-party error values must be greater than or equal to this value.
- [kFxError_UnableToCreateDynamicRegistrationEndpoint](kfxerror_unabletocreatedynamicregistrationendpoint.md): An error that indicates that the XPC service was unable to create a new XPC Listener Endpoint for communication with the host application.
- [kFxError_UnableToInstantiateDynamicRegistrar](kfxerror_unabletoinstantiatedynamicregistrar.md): An error that indicates that the XPC service was unable to instantiate a dynamic registrar object.
- [kFxError_UnableToMovePlayhead](kfxerror_unabletomoveplayhead.md): An error that indicates that an attempt by the host to move the playhead failed.
- [kFxError_UserCancelled](kfxerror_usercancelled.md): An error that indicates that an analysis operation was canceled by the user.
- [kFxError_UnableToObtainProjectAspectRatio](kfxerror_unabletoobtainprojectaspectratio.md): An error that indicates that the host couldn’t obtain the project’s aspect ratio.

## See Also

### Anonymous enumerations

- [enum (unnamed)](enum_%28unnamed%29-14vbr.md): The field order.
- [enum (unnamed)](enum_%28unnamed%29-187sa.md)
- [enum (unnamed)](enum_%28unnamed%29-1tjh8.md): The possible states of analysis, as reported by the host application when queried with [analysisStateForEffect](fxanalysisapi/analysisstateforeffect%28%29.md).
- [enum (unnamed)](enum_%28unnamed%29-2epbe.md)
- [enum (unnamed)](enum_%28unnamed%29-35krj.md): The path blend mode.
- [enum (unnamed)](enum_%28unnamed%29-3fxly.md): The bit-depth
- [enum (unnamed)](enum_%28unnamed%29-3hmov.md): The render quality.
- [enum (unnamed)](enum_%28unnamed%29-424rv.md)
- [enum (unnamed)](enum_%28unnamed%29-5key8.md)
- [enum (unnamed)](enum_%28unnamed%29-5ml7h.md)
- [enum (unnamed)](enum_%28unnamed%29-5r2wt.md): Constants used to describe a set of color primaries.
- [enum (unnamed)](enum_%28unnamed%29-5zg4z.md)
- [enum (unnamed)](enum_%28unnamed%29-74key.md)
- [enum (unnamed)](enum_%28unnamed%29-7b48r.md)
- [enum (unnamed)](enum_%28unnamed%29-7jahq.md)
