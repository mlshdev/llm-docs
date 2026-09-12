> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/delegate](https://developer.apple.com/documentation/corelocation/cllocationmanager/delegate)

# delegate (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object to receive update events.

## Declaration

```swift
weak var delegate: (any CLLocationManagerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Receiving data from location services

- [CLLocationManagerDelegate](../cllocationmanagerdelegate.md): The methods you use to receive events from an associated location-manager object.

# delegate (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object to receive update events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CLLocationManagerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Receiving data from location services

- [CLLocationManagerDelegate](../cllocationmanagerdelegate.md): The methods you use to receive events from an associated location-manager object.
