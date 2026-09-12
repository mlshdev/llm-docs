> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/debugdescription](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/debugdescription)

# debugDescription (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A textual representation of the receiver to use with a debugger.

## Declaration

```swift
optional var debugDescription: String { get }
```

<a id="return-value"></a>

## Return Value

A string that describes the object for debugging purposes.

<a id="Discussion"></a>

## Discussion

The debugger’s `po` command uses this property to create a textual representation of the object suitable for display in the debugger. The default implemention returns the same value as [description](description.md). Override either property to provide custom object descriptions.

## See Also

### Describing Objects

- [description](description.md): A textual representation of the receiver.

# debugDescription (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A textual representation of the receiver to use with a debugger.

## Declaration

```objectivec
@property (copy, readonly) NSString * debugDescription;
```

<a id="return-value"></a>

## Return Value

A string that describes the object for debugging purposes.

<a id="Discussion"></a>

## Discussion

The debugger’s `po` command uses this property to create a textual representation of the object suitable for display in the debugger. The default implemention returns the same value as [description](description.md). Override either property to provide custom object descriptions.

## See Also

### Describing Objects

- [description](description.md): A textual representation of the receiver.
