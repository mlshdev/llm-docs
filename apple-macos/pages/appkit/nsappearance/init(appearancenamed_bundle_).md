> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/init(appearancenamed:bundle:)](https://developer.apple.com/documentation/appkit/nsappearance/init(appearancenamed:bundle:))

# init(appearanceNamed:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates an appearance object from the named appearance file located in the specified bundle.

## Declaration

```swift
init?(appearanceNamed name: NSAppearance.Name, bundle: Bundle?)
```

## Parameters

- `name`: The name of the appearance file to retrieve. Do not include any path information in the name.
- `bundle`: The bundle in which to search for the named appearance file. Specify `nil` to search for the appearance file in the main bundle.

<a id="return-value"></a>

## Return Value

An initialized appearance object, or `nil` if an error occurs.

## See Also

### Creating an Appearance

- [init(named:)](init%28named_%29.md): Creates an appearance object based on the name of one of the standard system appearances.
- [init(coder:)](init%28coder_%29.md)

# initWithAppearanceNamed:bundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Creates an appearance object from the named appearance file located in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithAppearanceNamed:(NSAppearanceName) name bundle:(NSBundle *) bundle;
```

## Parameters

- `name`: The name of the appearance file to retrieve. Do not include any path information in the name.
- `bundle`: The bundle in which to search for the named appearance file. Specify `nil` to search for the appearance file in the main bundle.

<a id="return-value"></a>

## Return Value

An initialized appearance object, or `nil` if an error occurs.

## See Also

### Creating an Appearance

- [appearanceNamed:](init%28named_%29.md): Creates an appearance object based on the name of one of the standard system appearances.
- [initWithCoder:](init%28coder_%29.md)
