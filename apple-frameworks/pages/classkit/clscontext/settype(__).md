> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/settype(_:)](https://developer.apple.com/documentation/classkit/clscontext/settype(_:))

# setType(\_:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Updates the kind of content that a context represents.

## Declaration

```swift
func setType(_ type: CLSContextType)
```

## Parameters

- `type`: A new value for the kind of content that the context represents.

<a id="Discussion"></a>

## Discussion

Use this method to change the [type](type.md) property of a context that you’ve already created.

## See Also

### Managing the context type

- [type](type.md): The kind of content a context represents.
- [CLSContextType](../clscontexttype.md): The kinds of assignable content a context can contain.
- [customTypeName](customtypename.md): An optional name that the system presents to the user if you choose the custom context type.

# setType: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Updates the kind of content that a context represents.

## Declaration

```objectivec
- (void) setType:(CLSContextType) type;
```

## Parameters

- `type`: A new value for the kind of content that the context represents.

<a id="Discussion"></a>

## Discussion

Use this method to change the [type](type.md) property of a context that you’ve already created.

## See Also

### Managing the context type

- [type](type.md): The kind of content a context represents.
- [CLSContextType](../clscontexttype.md): The kinds of assignable content a context can contain.
- [customTypeName](customtypename.md): An optional name that the system presents to the user if you choose the custom context type.
