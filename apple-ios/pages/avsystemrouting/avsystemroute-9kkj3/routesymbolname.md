> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-9kkj3/routesymbolname](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-9kkj3/routesymbolname)

# routeSymbolName

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The SF Symbol name representing the remote device or route.

## Declaration

```objectivec
@property (copy, readonly) NSString * routeSymbolName;
```

<a id="discussion"></a>

## Discussion

This property returns a system symbol name as an `NSString` that identifies the type of device (such as a TV, speaker, or other compatible endpoint). Use this value with `UIImage(systemName:)` to create an icon for display in your app’s user interface.

```objc
UIImage *routeIcon = [UIImage systemImageNamed:route.routeSymbolName];
```

The symbol helps people visually identify where their media will be played.
