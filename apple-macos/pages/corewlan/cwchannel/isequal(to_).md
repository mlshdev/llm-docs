> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwchannel/isequal(to:)](https://developer.apple.com/documentation/corewlan/cwchannel/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Determine CWChannel object equality.

## Declaration

```swift
func isEqual(to channel: CWChannel) -> Bool
```

## Parameters

- `channel`: The CWChannel object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

CWChannel objects are considered equal if all their corresponding properties are equal.

# isEqualToChannel: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Determine CWChannel object equality.

## Declaration

```objectivec
- (BOOL) isEqualToChannel:(CWChannel *) channel;
```

## Parameters

- `channel`: The CWChannel object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

CWChannel objects are considered equal if all their corresponding properties are equal.
