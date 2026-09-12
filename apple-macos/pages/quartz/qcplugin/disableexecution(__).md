> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/disableexecution(_:)](https://developer.apple.com/documentation/quartz/qcplugin/disableexecution(_:))

# disableExecution(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func disableExecution(_ context: (any QCPlugInContext)!)
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method when results are no longer being pulled from the  custom patch. You can optionally override this execution method to perform custom tasks at that time.

## See Also

### Performing Custom Tasks During Execution

- [startExecution(\_:)](startexecution%28__%29.md): Deprecated. Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.
- [enableExecution(\_:)](enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [stopExecution(\_:)](stopexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the `QCPlugIn` object stops executing.

# disableExecution: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) disableExecution:(id<QCPlugInContext>) context;
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method when results are no longer being pulled from the  custom patch. You can optionally override this execution method to perform custom tasks at that time.

## See Also

### Performing Custom Tasks During Execution

- [startExecution:](startexecution%28__%29.md): Deprecated. Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.
- [enableExecution:](enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [stopExecution:](stopexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the `QCPlugIn` object stops executing.
