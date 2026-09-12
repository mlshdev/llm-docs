> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomaction/init(name:target:selector:)](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction/init(name:target:selector:))

# init(name:target:selector:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a custom action object with the specified name, target, and selector.

## Declaration

```swift
init(name: String, target: any NSObjectProtocol, selector: Selector)
```

## See Also

### Creating a Custom Action

- [init(name:handler:)](init%28name_handler_%29.md): Creates a custom action object with the specified name and handler.

# initWithName:target:selector: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a custom action object with the specified name, target, and selector.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name target:(id<NSObject>) target selector:(SEL) selector;
```

## See Also

### Creating a Custom Action

- [initWithName:handler:](init%28name_handler_%29.md): Creates a custom action object with the specified name and handler.
