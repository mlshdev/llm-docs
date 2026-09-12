> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfuniversallink/webpageurl](https://developer.apple.com/documentation/safariservices/sfuniversallink/webpageurl)

# webpageURL (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The URL specified when initializing the receiver.

## Declaration

```swift
var webpageURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the URL passed when initializing the receiver. This property is read-only.

## See Also

### Configuring Universal Links

- [applicationURL](applicationurl.md): The URL to the app that can open this universal link.
- [isEnabled](isenabled.md): A flag that indicates whether the universal link is enabled.

# webpageURL (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The URL specified when initializing the receiver.

## Declaration

```objectivec
@property (readonly) NSURL * webpageURL;
```

<a id="Discussion"></a>

## Discussion

This property returns the URL passed when initializing the receiver. This property is read-only.

## See Also

### Configuring Universal Links

- [applicationURL](applicationurl.md): The URL to the app that can open this universal link.
- [enabled](isenabled.md): A flag that indicates whether the universal link is enabled.
