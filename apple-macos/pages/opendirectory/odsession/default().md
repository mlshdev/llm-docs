> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsession/default()](https://developer.apple.com/documentation/opendirectory/odsession/default())

# default() (Swift)

**Framework:** Open Directory  
**Kind:** Type Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a shared instance of the local session.

## Declaration

```swift
class func `default`() -> ODSession!
```

<a id="return-value"></a>

## Return Value

A shared instance of the local session.

## See Also

### Creating and Accessing Sessions

- [init(options:)](init%28options_%29.md): Creates a session object directed over proxy to another host.

# defaultSession (Objective-C)

**Framework:** Open Directory  
**Kind:** Type Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a shared instance of the local session.

## Declaration

```objectivec
+ (ODSession *) defaultSession;
```

<a id="return-value"></a>

## Return Value

A shared instance of the local session.

## See Also

### Creating and Accessing Sessions

- [initWithOptions:error:](init%28options_%29.md): Creates a session object directed over proxy to another host.
- [sessionWithOptions:error:](sessionwithoptions_error_.md): Returns an autoreleased session object directed over proxy to another host.
