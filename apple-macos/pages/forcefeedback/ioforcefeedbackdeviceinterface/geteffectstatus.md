> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ioforcefeedbackdeviceinterface/geteffectstatus](https://developer.apple.com/documentation/forcefeedback/ioforcefeedbackdeviceinterface/geteffectstatus)

# GetEffectStatus

**Interface language:** Objective-C

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
int (*)(void *, unsigned int, unsigned int *) GetEffectStatus;
```

## See Also

### Instance Properties

- [AddRef](addref.md)
- [DestroyEffect](destroyeffect.md)
- [DownloadEffect](downloadeffect.md)
- [Escape](escape.md)
- [ForceFeedbackGetVersion](forcefeedbackgetversion.md)
- [GetForceFeedbackCapabilities](getforcefeedbackcapabilities.md)
- [GetForceFeedbackState](getforcefeedbackstate.md)
- [InitializeTerminate](initializeterminate.md)
- [QueryInterface](queryinterface.md)
- [Release](release.md)
- [SendForceFeedbackCommand](sendforcefeedbackcommand.md)
- [SetProperty](setproperty.md)
- [StartEffect](starteffect.md)
- [StopEffect](stopeffect.md)
