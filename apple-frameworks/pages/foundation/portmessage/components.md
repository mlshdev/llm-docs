> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/portmessage/components

# components (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the data components of the receiver.

## Declaration

```swift
var components: [Any]? { get }
```

<a id="return-value"></a>

## Return Value

The data components of the receiver. See [PortMessage](../portmessage.md) for more information.

# components (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the data components of the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray * components;
```

<a id="return-value"></a>

## Return Value

The data components of the receiver. See [NSPortMessage](../portmessage.md) for more information.
