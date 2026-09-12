> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfuniversallink/isenabled](https://developer.apple.com/documentation/safariservices/sfuniversallink/isenabled)

# isEnabled (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A flag that indicates whether the universal link is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This Boolean property indicates if the universal link is enabled.

When enabled, this property has two defined behaviors:

1. If an application opens the universal link, the system opens the link in the native application represented by the application URL property instead of the browser.
2. If a browser opens the universal link, it can choose to open the URL using [open(\_:withApplicationAt:configuration:completionHandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/open%28_:withapplicationat:configuration:completionhandler:%29), or can present other information to the user as appropriate.

When this property is disabled, the browser simply opens the URL as it normally would.

## See Also

### Configuring Universal Links

- [applicationURL](applicationurl.md): The URL to the app that can open this universal link.
- [webpageURL](webpageurl.md): The URL specified when initializing the receiver.

# enabled (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A flag that indicates whether the universal link is enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

This Boolean property indicates if the universal link is enabled.

When enabled, this property has two defined behaviors:

1. If an application opens the universal link, the system opens the link in the native application represented by the application URL property instead of the browser.
2. If a browser opens the universal link, it can choose to open the URL using [openURLs:withApplicationAtURL:configuration:completionHandler:](https://developer.apple.com/documentation/appkit/nsworkspace/open%28_:withapplicationat:configuration:completionhandler:%29), or can present other information to the user as appropriate.

When this property is disabled, the browser simply opens the URL as it normally would.

## See Also

### Configuring Universal Links

- [applicationURL](applicationurl.md): The URL to the app that can open this universal link.
- [webpageURL](webpageurl.md): The URL specified when initializing the receiver.
