> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld/world(name:)](https://developer.apple.com/documentation/webkit/wkcontentworld/world(name:))

# world(name:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns the custom content world with the specified name.

## Declaration

```swift
class func world(name: String) -> WKContentWorld
```

## Parameters

- `name`: The name of the content world you want. If no content world with that name exists, this method creates a new [WKContentWorld](../wkcontentworld.md) object and returns it. The next time you request a content world with the same name, this method returns the object it previously created.

<a id="return-value"></a>

## Return Value

The content world with the specified name.

<a id="Discussion"></a>

## Discussion

Use this method to create unique content worlds for your script code. For example, if you execute scripts from multiple JavaScript extensions, you might use this method to create a content world based on a unique string associated with that extension.

## See Also

### Retrieving a Custom Content World

- [name](name.md): The name of a custom content world.

# worldWithName: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns the custom content world with the specified name.

## Declaration

```objectivec
+ (WKContentWorld *) worldWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the content world you want. If no content world with that name exists, this method creates a new [WKContentWorld](../wkcontentworld.md) object and returns it. The next time you request a content world with the same name, this method returns the object it previously created.

<a id="return-value"></a>

## Return Value

The content world with the specified name.

<a id="Discussion"></a>

## Discussion

Use this method to create unique content worlds for your script code. For example, if you execute scripts from multiple JavaScript extensions, you might use this method to create a content world based on a unique string associated with that extension.

## See Also

### Retrieving a Custom Content World

- [name](name.md): The name of a custom content world.
