> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkserver/init(name:controllerclass:delegateclass:)](https://developer.apple.com/documentation/inputmethodkit/imkserver/init(name:controllerclass:delegateclass:))

# init(name:controllerClass:delegateClass:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Creates and returns a server object initialized with the provided parameters.

## Declaration

```swift
init!(name: String!, controllerClass controllerClassID: AnyClass!, delegateClass delegateClassID: AnyClass!)
```

## Parameters

- `name`: The name to initialize the server object with.
- `controllerClassID`: The id for the input controller class.
- `delegateClassID`: The id for the delegate class.

<a id="return-value"></a>

## Return Value

An initialized server object.

## See Also

### Initializing a Server Object

- [init(name:bundleIdentifier:)](init%28name_bundleidentifier_%29.md): Creates and returns a server object from property list information contained in the provided bundle.

# initWithName:controllerClass:delegateClass: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates and returns a server object initialized with the provided parameters.

## Declaration

```objectivec
- (id) initWithName:(NSString *) name controllerClass:(Class) controllerClassID delegateClass:(Class) delegateClassID;
```

## Parameters

- `name`: The name to initialize the server object with.
- `controllerClassID`: The id for the input controller class.
- `delegateClassID`: The id for the delegate class.

<a id="return-value"></a>

## Return Value

An initialized server object.

## See Also

### Initializing a Server Object

- [initWithName:bundleIdentifier:](init%28name_bundleidentifier_%29.md): Creates and returns a server object from property list information contained in the provided bundle.
