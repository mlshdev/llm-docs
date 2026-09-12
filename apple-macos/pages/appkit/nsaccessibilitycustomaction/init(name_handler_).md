> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomaction/init(name:handler:)](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction/init(name:handler:))

# init(name:handler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a custom action object with the specified name and handler.

## Declaration

```swift
init(name: String, handler: (() -> Bool)? = nil)
```

## See Also

### Creating a Custom Action

- [init(name:target:selector:)](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.

# initWithName:handler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a custom action object with the specified name and handler.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name handler:(BOOL (^)()) handler;
```

## See Also

### Creating a Custom Action

- [initWithName:target:selector:](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
