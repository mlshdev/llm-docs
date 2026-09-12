> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/getattributesrequest/wantedattributes](https://developer.apple.com/documentation/fskit/fsitem/getattributesrequest/wantedattributes)

# wantedAttributes (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The attributes requested by the request.

## Declaration

```swift
var wantedAttributes: FSItem.Attribute { get set }
```

<a id="discussion"></a>

## Discussion

This property is a bit field in Objective-C and an [OptionSet](https://developer.apple.com/documentation/swift/optionset) in Swift.

## See Also

### Inspecting requested attributes

- [isAttributeWanted(\_:)](isattributewanted%28__%29.md): A method that indicates whether the request wants given attribute.
- [FSItem.Attribute](../attribute.md): A value that indicates a set of item attributes to get or set.

# wantedAttributes (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The attributes requested by the request.

## Declaration

```objectivec
@property (nonatomic) FSItemAttribute wantedAttributes;
```

<a id="discussion"></a>

## Discussion

This property is a bit field in Objective-C and an [OptionSet](https://developer.apple.com/documentation/swift/optionset) in Swift.

## See Also

### Inspecting requested attributes

- [isAttributeWanted:](isattributewanted%28__%29.md): A method that indicates whether the request wants given attribute.
- [FSItemAttribute](../attribute.md): A value that indicates a set of item attributes to get or set.
