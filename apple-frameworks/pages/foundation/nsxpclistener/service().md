> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/service()](https://developer.apple.com/documentation/foundation/nsxpclistener/service())

# service() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the singleton listener used to listen for incoming connections in an XPC service.

## Declaration

```swift
class func service() -> NSXPCListener
```

<a id="Discussion"></a>

## Discussion

Calling the `resume` method on the returned object starts the listener and never returns. This method is typically called at the end of your `main` function.

> **Note**

>  This method requires that the XPC service has the appropriate configuration in its `Info.plist` file.

## See Also

### Using standard listeners

- [anonymous()](anonymous%28%29.md): Returns a new anonymous listener connection.

# serviceListener (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the singleton listener used to listen for incoming connections in an XPC service.

## Declaration

```objectivec
+ (NSXPCListener *) serviceListener;
```

<a id="Discussion"></a>

## Discussion

Calling the `resume` method on the returned object starts the listener and never returns. This method is typically called at the end of your `main` function.

> **Note**

>  This method requires that the XPC service has the appropriate configuration in its `Info.plist` file.

## See Also

### Using standard listeners

- [anonymousListener](anonymous%28%29.md): Returns a new anonymous listener connection.
