> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/init(identifier:)](https://developer.apple.com/documentation/appkit/nstoolbar/init(identifier:))

# init(identifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Creates a newly allocated toolbar with the specified identifier.

## Declaration

```swift
init(identifier: NSToolbar.Identifier)
```

## Parameters

- `identifier`: A string used by the class to identify the kind of the toolbar.

<a id="return-value"></a>

## Return Value

The initialized toolbar object.

<a id="Discussion"></a>

## Discussion

`identifier` is never seen by users and should not be localized. See the [identifier](identifier-swift.property.md) property for important information.

## See Also

### Related Documentation

- [identifier](identifier-swift.property.md): The value you use to identify the toolbar in your app.

### Creating an toolbar object

- [init()](init%28%29.md): Creates a new toolbar with an empty identifier string.

# initWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Creates a newly allocated toolbar with the specified identifier.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSToolbarIdentifier) identifier;
```

## Parameters

- `identifier`: A string used by the class to identify the kind of the toolbar.

<a id="return-value"></a>

## Return Value

The initialized toolbar object.

<a id="Discussion"></a>

## Discussion

`identifier` is never seen by users and should not be localized. See the [identifier](identifier-swift.property.md) property for important information.

## See Also

### Related Documentation

- [identifier](identifier-swift.property.md): The value you use to identify the toolbar in your app.

### Creating an toolbar object

- [init](init%28%29.md): Creates a new toolbar with an empty identifier string.
