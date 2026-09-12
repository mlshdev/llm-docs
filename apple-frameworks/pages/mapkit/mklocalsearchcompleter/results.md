> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/results](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/results)

# results (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The most recently received search completions.

## Declaration

```swift
var results: [MKLocalSearchCompletion] { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` initially. After a successful query, the search completer sets this property to the array of [MKLocalSearchCompletion](../mklocalsearchcompletion.md) objects that the query returns. Each new successful query replaces the previous value of this property.

# results (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The most recently received search completions.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<MKLocalSearchCompletion *> * results;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` initially. After a successful query, the search completer sets this property to the array of [MKLocalSearchCompletion](../mklocalsearchcompletion.md) objects that the query returns. Each new successful query replaces the previous value of this property.
