> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferdescriptor/commandtypes](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferdescriptor/commandtypes)

# commandTypes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The set of command types that you can encode into the indirect command buffer.

## Declaration

```swift
var commandTypes: MTLIndirectCommandType { get set }
```

<a id="discussion"></a>

## Discussion

When you create the indirect command buffer, Metal allocates memory for each command it can hold. It needs to allocate enough memory to hold any command that you might later encode. To save space, specify only the command types you are going to encode in the indirect command buffer.

You can’t combine rendering and compute commands in the same indirect command buffer.

# commandTypes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The set of command types that you can encode into the indirect command buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLIndirectCommandType commandTypes;
```

<a id="discussion"></a>

## Discussion

When you create the indirect command buffer, Metal allocates memory for each command it can hold. It needs to allocate enough memory to hold any command that you might later encode. To save space, specify only the command types you are going to encode in the indirect command buffer.

You can’t combine rendering and compute commands in the same indirect command buffer.
