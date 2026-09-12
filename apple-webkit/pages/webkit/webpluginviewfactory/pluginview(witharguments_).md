> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpluginviewfactory/pluginview(witharguments:)](https://developer.apple.com/documentation/webkit/webpluginviewfactory/pluginview(witharguments:))

# plugInView(withArguments:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Creates a new plug-in view.

## Declaration

```swift
static func plugInView(withArguments arguments: [AnyHashable : Any]!) -> NSView!
```

## Parameters

- `arguments`: Arguments used in creating the view.

<a id="return-value"></a>

## Return Value

The created view.

<a id="Discussion"></a>

## Discussion

This method returns an `NSView` object that conforms to the `WebPlugIn` informal protocol. The arguments dictionary should be specified by the keys and objects described in `Constants`. This method is required.

# plugInViewWithArguments: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Creates a new plug-in view.

## Declaration

```objectivec
+ (NSView *) plugInViewWithArguments:(NSDictionary *) arguments;
```

## Parameters

- `arguments`: Arguments used in creating the view.

<a id="return-value"></a>

## Return Value

The created view.

<a id="Discussion"></a>

## Discussion

This method returns an `NSView` object that conforms to the `WebPlugIn` informal protocol. The arguments dictionary should be specified by the keys and objects described in `Constants`. This method is required.
