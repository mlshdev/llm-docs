> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfuniversallink/applicationurl](https://developer.apple.com/documentation/safariservices/sfuniversallink/applicationurl)

# applicationURL (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The URL to the app that can open this universal link.

## Declaration

```swift
var applicationURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

The URL represents a location on the file system. You can retrieve additional information about this app using [resourceValues(forKeys:)](../../foundation/nsurl/resourcevalues%28forkeys_%29.md).

## See Also

### Configuring Universal Links

- [isEnabled](isenabled.md): A flag that indicates whether the universal link is enabled.
- [webpageURL](webpageurl.md): The URL specified when initializing the receiver.

# applicationURL (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The URL to the app that can open this universal link.

## Declaration

```objectivec
@property (readonly) NSURL * applicationURL;
```

<a id="Discussion"></a>

## Discussion

The URL represents a location on the file system. You can retrieve additional information about this app using [resourceValuesForKeys:error:](../../foundation/nsurl/resourcevalues%28forkeys_%29.md).

## See Also

### Configuring Universal Links

- [enabled](isenabled.md): A flag that indicates whether the universal link is enabled.
- [webpageURL](webpageurl.md): The URL specified when initializing the receiver.
