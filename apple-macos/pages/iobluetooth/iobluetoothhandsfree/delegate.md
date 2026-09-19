> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/delegate

# delegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the delegate

## Declaration

```swift
unowned(unsafe) var delegate: (any IOBluetoothHandsFreeDelegate)! { get set }
```

<a id="return-value"></a>

## Return Value

The delegate for the hands free object or nil if it doesn’t have a delegate.

<a id="Discussion"></a>

## Discussion

Returns the hands free object’s delegate.

# delegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the delegate

## Declaration

```objectivec
@property (assign) id<IOBluetoothHandsFreeDelegate> delegate;
```

<a id="return-value"></a>

## Return Value

The delegate for the hands free object or nil if it doesn’t have a delegate.

<a id="Discussion"></a>

## Discussion

Returns the hands free object’s delegate.
