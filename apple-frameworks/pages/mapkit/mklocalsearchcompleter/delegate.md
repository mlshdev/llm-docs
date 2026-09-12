> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/delegate](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/delegate)

# delegate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The object that receives the completion results.

## Declaration

```swift
weak var delegate: (any MKLocalSearchCompleterDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You must provide a delegate object to receive completion results and to handle any errors that might occur. For more information about the methods of the delegate protocol, see [MKLocalSearchCompleterDelegate](../mklocalsearchcompleterdelegate.md).

## See Also

### Receiving the search results

- [MKLocalSearchCompleterDelegate](../mklocalsearchcompleterdelegate.md): Methods the delegate calls with search completion data.

# delegate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The object that receives the completion results.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MKLocalSearchCompleterDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You must provide a delegate object to receive completion results and to handle any errors that might occur. For more information about the methods of the delegate protocol, see [MKLocalSearchCompleterDelegate](../mklocalsearchcompleterdelegate.md).

## See Also

### Receiving the search results

- [MKLocalSearchCompleterDelegate](../mklocalsearchcompleterdelegate.md): Methods the delegate calls with search completion data.
