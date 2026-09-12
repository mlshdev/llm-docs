> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ioforcefeedbackdeviceinterface/downloadeffect](https://developer.apple.com/documentation/forcefeedback/ioforcefeedbackdeviceinterface/downloadeffect)

# DownloadEffect

**Interface language:** Objective-C

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
int (*)(void *, const struct __CFUUID *, unsigned int *, struct FFEFFECT *, unsigned int) DownloadEffect;
```

## See Also

### Instance Properties

- [AddRef](addref.md)
- [DestroyEffect](destroyeffect.md)
- [Escape](escape.md)
- [ForceFeedbackGetVersion](forcefeedbackgetversion.md)
- [GetEffectStatus](geteffectstatus.md)
- [GetForceFeedbackCapabilities](getforcefeedbackcapabilities.md)
- [GetForceFeedbackState](getforcefeedbackstate.md)
- [InitializeTerminate](initializeterminate.md)
- [QueryInterface](queryinterface.md)
- [Release](release.md)
- [SendForceFeedbackCommand](sendforcefeedbackcommand.md)
- [SetProperty](setproperty.md)
- [StartEffect](starteffect.md)
- [StopEffect](stopeffect.md)
