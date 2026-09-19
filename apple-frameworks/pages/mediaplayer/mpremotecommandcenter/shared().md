> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/shared()

# shared() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Returns the shared object you use to access the system’s remote command objects.

## Declaration

```swift
class func shared() -> MPRemoteCommandCenter
```

<a id="return-value"></a>

## Return Value

The shared instance of the `MPRemoteCommandCenter` class.

# sharedCommandCenter (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Returns the shared object you use to access the system’s remote command objects.

## Declaration

```objectivec
+ (MPRemoteCommandCenter *) sharedCommandCenter;
```

<a id="return-value"></a>

## Return Value

The shared instance of the `MPRemoteCommandCenter` class.
