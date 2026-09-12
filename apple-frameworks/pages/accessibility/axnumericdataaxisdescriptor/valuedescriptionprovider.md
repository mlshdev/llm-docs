> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axnumericdataaxisdescriptor/valuedescriptionprovider](https://developer.apple.com/documentation/accessibility/axnumericdataaxisdescriptor/valuedescriptionprovider)

# valueDescriptionProvider (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A description to speak for a particular data value on the axis.

## Declaration

```swift
var valueDescriptionProvider: (Double) -> String { get set }
```

## Mentioned In

- [Representing chart data as an audio graph](../representing-chart-data-as-an-audio-graph.md)

<a id="discussion"></a>

## Discussion

Use this property to format data values into string representations that include units, dates, times, and more.

# valueDescriptionProvider (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A description to speak for a particular data value on the axis.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * (^valueDescriptionProvider)(double );
```

## Mentioned In

- [Representing chart data as an audio graph](../representing-chart-data-as-an-audio-graph.md)

<a id="discussion"></a>

## Discussion

Use this property to format data values into string representations that include units, dates, times, and more.
