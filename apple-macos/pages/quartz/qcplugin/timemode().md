> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/timemode()](https://developer.apple.com/documentation/quartz/qcplugin/timemode())

# timeMode() (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the time mode for the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func timeMode() -> QCPlugInTimeMode
```

<a id="return-value"></a>

## Return Value

The time mode of the custom patch. See [QCPlugInTimeMode](../qcplugintimemode.md) for the constants you can return.

<a id="Discussion"></a>

## Discussion

You must implement this method to define whether you custom patch depends on time, doesn’t depend on time, or needs time to idle.

## See Also

### Defining the Characteristics of a Custom Patch

- [executionMode()](executionmode%28%29.md): Deprecated. Returns the execution mode of the custom patch.

# timeMode (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the time mode for the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (QCPlugInTimeMode) timeMode;
```

<a id="return-value"></a>

## Return Value

The time mode of the custom patch. See [QCPlugInTimeMode](../qcplugintimemode.md) for the constants you can return.

<a id="Discussion"></a>

## Discussion

You must implement this method to define whether you custom patch depends on time, doesn’t depend on time, or needs time to idle.

## See Also

### Defining the Characteristics of a Custom Patch

- [executionMode](executionmode%28%29.md): Deprecated. Returns the execution mode of the custom patch.
