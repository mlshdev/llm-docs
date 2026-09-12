> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumehandlerresult/requestedattributes](https://developer.apple.com/documentation/fskit/fsvolumehandlerresult/requestedattributes)

# requestedAttributes (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

A set of attributes to populate.

## Declaration

```swift
class var requestedAttributes: FSItem.GetAttributesRequest { get }
```

<a id="discussion"></a>

## Discussion

Your module populates these attributes in [FSItem.Attributes](../fsitem/attributes.md) instances.

Different operations may require different attribute sets. Access this property through the relevant result subclass, such as \`\`FSLookupItemResult.requestedAttributes\`.

> **Important**

> Be sure to populate all requested attributes. FSKit caches all populated attributes and may use them in subsequent operations, even if not explicitly requested.

# requestedAttributes (Objective-C)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

A set of attributes to populate.

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) FSItemGetAttributesRequest * requestedAttributes;
```

<a id="discussion"></a>

## Discussion

Your module populates these attributes in [FSItemAttributes](../fsitem/attributes.md) instances.

Different operations may require different attribute sets. Access this property through the relevant result subclass, such as \`\`FSLookupItemResult.requestedAttributes\`.

> **Important**

> Be sure to populate all requested attributes. FSKit caches all populated attributes and may use them in subsequent operations, even if not explicitly requested.
