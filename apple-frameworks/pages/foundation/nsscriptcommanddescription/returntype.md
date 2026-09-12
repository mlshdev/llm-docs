> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/returntype](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/returntype)

# returnType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the return type of the command.

## Declaration

```swift
var returnType: String? { get }
```

<a id="return-value"></a>

## Return Value

The receiver’s command return type; for example, `"NSNumber"` or `"NSDictionary"`).

## See Also

### Getting Command Return-Type Information

- [appleEventCodeForReturnType](appleeventcodeforreturntype.md): Returns the Apple event code that identifies the command’s return type.

# returnType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the return type of the command.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * returnType;
```

<a id="return-value"></a>

## Return Value

The receiver’s command return type; for example, `"NSNumber"` or `"NSDictionary"`).

## See Also

### Getting Command Return-Type Information

- [appleEventCodeForReturnType](appleeventcodeforreturntype.md): Returns the Apple event code that identifies the command’s return type.
