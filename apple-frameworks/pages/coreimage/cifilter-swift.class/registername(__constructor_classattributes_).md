> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/registername(_:constructor:classattributes:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/registername(_:constructor:classattributes:))

# registerName(\_:constructor:classAttributes:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Publishes a custom filter that is not packaged as an image unit.

## Declaration

```swift
class func registerName(_ name: String, constructor anObject: any CIFilterConstructor, classAttributes attributes: [String : Any] = [:])
```

## Parameters

- `name`: A string object that specifies the name of the filter you want to publish.
- `anObject`: A constructor object that implements the `filterWithName` method.
- `attributes`: A dictionary that contains the class display name and filter categories attributes along with the appropriate value for each attributes. That is,  the [kCIAttributeFilterDisplayName](../kciattributefilterdisplayname.md) attribute and a string that specifies the display name, and the [kCIAttributeFilterCategories](../kciattributefiltercategories.md) and an array that specifies the categories to which the filter belongs (such as [kCICategoryStillImage](../kcicategorystillimage.md) and [kCICategoryDistortionEffect](../kcicategorydistortioneffect.md)). All other attributes for the filter should be returned by the custom `attributes` method implement by the filter.

<a id="Discussion"></a>

## Discussion

In most cases you don’t need to use this method because the preferred way to register a custom filter that you write is to package it as an image unit. You do not need to use this method for a filter packaged as an image unit because you  register your filter using the `CIPlugInRegistration` protocol. (See [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for additional details.)

# registerFilterName:constructor:classAttributes: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Publishes a custom filter that is not packaged as an image unit.

## Declaration

```objectivec
+ (void) registerFilterName:(NSString *) name constructor:(id<CIFilterConstructor>) anObject classAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `name`: A string object that specifies the name of the filter you want to publish.
- `anObject`: A constructor object that implements the `filterWithName` method.
- `attributes`: A dictionary that contains the class display name and filter categories attributes along with the appropriate value for each attributes. That is,  the [kCIAttributeFilterDisplayName](../kciattributefilterdisplayname.md) attribute and a string that specifies the display name, and the [kCIAttributeFilterCategories](../kciattributefiltercategories.md) and an array that specifies the categories to which the filter belongs (such as [kCICategoryStillImage](../kcicategorystillimage.md) and [kCICategoryDistortionEffect](../kcicategorydistortioneffect.md)). All other attributes for the filter should be returned by the custom `attributes` method implement by the filter.

<a id="Discussion"></a>

## Discussion

In most cases you don’t need to use this method because the preferred way to register a custom filter that you write is to package it as an image unit. You do not need to use this method for a filter packaged as an image unit because you  register your filter using the `CIPlugInRegistration` protocol. (See [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for additional details.)
