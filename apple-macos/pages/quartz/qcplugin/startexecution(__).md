> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/startexecution(_:)](https://developer.apple.com/documentation/quartz/qcplugin/startexecution(_:))

# startExecution(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func startExecution(_ context: (any QCPlugInContext)!) -> Bool
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) indicates a fatal error occurred and prevents the Quartz Composer engine from starting.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method  when your custom patch starts to render. You can optionally override this execution method to perform setup tasks.

## See Also

### Performing Custom Tasks During Execution

- [enableExecution(\_:)](enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [disableExecution(\_:)](disableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.
- [stopExecution(\_:)](stopexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the `QCPlugIn` object stops executing.

# startExecution: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) startExecution:(id<QCPlugInContext>) context;
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) indicates a fatal error occurred and prevents the Quartz Composer engine from starting.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method  when your custom patch starts to render. You can optionally override this execution method to perform setup tasks.

## See Also

### Performing Custom Tasks During Execution

- [enableExecution:](enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [disableExecution:](disableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.
- [stopExecution:](stopexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the `QCPlugIn` object stops executing.
