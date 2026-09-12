> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/init(named:)](https://developer.apple.com/documentation/appkit/nsappearance/init(named:))

# init(named:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates an appearance object based on the name of one of the standard system appearances.

## Declaration

```swift
init?(named name: NSAppearance.Name)
```

## Parameters

- `name`: The name of a standard appearance. See [NSAppearance.Name](name-swift.struct.md) for the list of standard appearance names.

<a id="return-value"></a>

## Return Value

A standard [NSAppearance](../nsappearance.md) object.

<a id="Discussion"></a>

## Discussion

When you specify a standard appearance name—such as [aqua](name-swift.struct/aqua.md)—this method returns a built-in appearance.

## See Also

### Creating an Appearance

- [init(appearanceNamed:bundle:)](init%28appearancenamed_bundle_%29.md): Creates an appearance object from the named appearance file located in the specified bundle.
- [init(coder:)](init%28coder_%29.md)

# appearanceNamed: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Creates an appearance object based on the name of one of the standard system appearances.

## Declaration

```objectivec
+ (NSAppearance *) appearanceNamed:(NSAppearanceName) name;
```

## Parameters

- `name`: The name of a standard appearance. See [NSAppearanceName](name-swift.struct.md) for the list of standard appearance names.

<a id="return-value"></a>

## Return Value

A standard [NSAppearance](../nsappearance.md) object.

<a id="Discussion"></a>

## Discussion

When you specify a standard appearance name—such as [NSAppearanceNameAqua](name-swift.struct/aqua.md)—this method returns a built-in appearance.

## See Also

### Creating an Appearance

- [initWithAppearanceNamed:bundle:](init%28appearancenamed_bundle_%29.md): Creates an appearance object from the named appearance file located in the specified bundle.
- [initWithCoder:](init%28coder_%29.md)
