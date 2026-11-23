> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontroller/delegate

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The custom object you provide to handle controller-related events.

## Declaration

```swift
weak var delegate: (any CPInstrumentClusterControllerDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

Assign a custom object to this property to receive information about events related to your instrument cluster UI. Make sure your custom object adopts the [CPInstrumentClusterControllerDelegate](../cpinstrumentclustercontrollerdelegate.md) protocol and implements the required methods. The controller notifies your delegate when the window changes, when vehicle settings change, and when the vehicle directs you to change the zoom level of your map content.

## See Also

### Managing the instrument cluster content

- [CPInstrumentClusterControllerDelegate](../cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The custom object you provide to handle controller-related events.

## Declaration

```objectivec
@property (nonatomic, weak) id<CPInstrumentClusterControllerDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

Assign a custom object to this property to receive information about events related to your instrument cluster UI. Make sure your custom object adopts the [CPInstrumentClusterControllerDelegate](../cpinstrumentclustercontrollerdelegate.md) protocol and implements the required methods. The controller notifies your delegate when the window changes, when vehicle settings change, and when the vehicle directs you to change the zoom level of your map content.

## See Also

### Managing the instrument cluster content

- [CPInstrumentClusterControllerDelegate](../cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
