> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/forgetgatelast](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/forgetgatelast)

# forgetGateLast (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that controls the internal order of the LSTM gates.

## Declaration

```swift
var forgetGateLast: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will use the gate-ordering `[ i, z, f, o ]` instead of default `[ i, f, z, o ]`. Default value: `NO`

# forgetGateLast (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that controls the internal order of the LSTM gates.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL forgetGateLast;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will use the gate-ordering `[ i, z, f, o ]` instead of default `[ i, f, z, o ]`. Default value: `NO`
