> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/appleeventcodeforreturntype

# appleEventCodeForReturnType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code that identifies the command’s return type.

## Declaration

```swift
var appleEventCodeForReturnType: FourCharCode { get }
```

<a id="return-value"></a>

## Return Value

The event code for the command’s return type.

## See Also

### Related Documentation

- [appleEventCodeForArgument(withName:)](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.

### Getting Command Return-Type Information

- [returnType](returntype.md): Returns the return type of the command.

# appleEventCodeForReturnType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code that identifies the command’s return type.

## Declaration

```objectivec
@property (readonly) FourCharCode appleEventCodeForReturnType;
```

<a id="return-value"></a>

## Return Value

The event code for the command’s return type.

## See Also

### Related Documentation

- [appleEventCodeForArgumentWithName:](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.

### Getting Command Return-Type Information

- [returnType](returntype.md): Returns the return type of the command.
