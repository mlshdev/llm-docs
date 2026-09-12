> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/stopexecution(_:)](https://developer.apple.com/documentation/quartz/qcplugin/stopexecution(_:))

# stopExecution(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to perform custom tasks when the `QCPlugIn` object stops executing.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func stopExecution(_ context: (any QCPlugInContext)!)
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method when it stops executing. You can optionally override this execution method to perform cleanup tasks.

## See Also

### Performing Custom Tasks During Execution

- [startExecution(\_:)](startexecution%28__%29.md): Deprecated. Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.
- [enableExecution(\_:)](enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [disableExecution(\_:)](disableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.

# stopExecution: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to perform custom tasks when the `QCPlugIn` object stops executing.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) stopExecution:(id<QCPlugInContext>) context;
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method when it stops executing. You can optionally override this execution method to perform cleanup tasks.

## See Also

### Performing Custom Tasks During Execution

- [startExecution:](startexecution%28__%29.md): Deprecated. Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.
- [enableExecution:](enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [disableExecution:](disableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.
