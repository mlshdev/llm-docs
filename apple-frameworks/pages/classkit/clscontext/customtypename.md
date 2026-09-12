> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/customtypename](https://developer.apple.com/documentation/classkit/clscontext/customtypename)

# customTypeName (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+

An optional name that the system presents to the user if you choose the custom context type.

## Declaration

```swift
var customTypeName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system ignores the value of this property unless you set the context’s [type](type.md) property to [CLSContextType.custom](../clscontexttype/custom.md).

If you set the type name, provide a localized value. If you use a custom context type but don’t set the type name, the system presents a default, localized string instead.

## See Also

### Managing the context type

- [type](type.md): The kind of content a context represents.
- [setType(\_:)](settype%28__%29.md): Updates the kind of content that a context represents.
- [CLSContextType](../clscontexttype.md): The kinds of assignable content a context can contain.

# customTypeName (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An optional name that the system presents to the user if you choose the custom context type.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * customTypeName;
```

<a id="Discussion"></a>

## Discussion

The system ignores the value of this property unless you set the context’s [type](type.md) property to [CLSContextTypeCustom](../clscontexttype/custom.md).

If you set the type name, provide a localized value. If you use a custom context type but don’t set the type name, the system presents a default, localized string instead.

## See Also

### Managing the context type

- [type](type.md): The kind of content a context represents.
- [setType:](settype%28__%29.md): Updates the kind of content that a context represents.
- [CLSContextType](../clscontexttype.md): The kinds of assignable content a context can contain.
