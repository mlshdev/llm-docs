> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setsemanticcontentattribute(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setsemanticcontentattribute(_:))

# setSemanticContentAttribute(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.1+

Sets the semantic description of the object’s contents, used to determine whether its content should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```swift
func setSemanticContentAttribute(_ semanticContentAttribute: WKInterfaceSemanticContentAttribute)
```

## Parameters

- `semanticContentAttribute`: The object’s semantic content attribute. For a list of possible values, see [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md).

<a id="Discussion"></a>

## Discussion

Some objects should not flip when switching between left-to-right and right-to-left layouts. Typically, this occurs because the object is part of the playback controls or represents physical directions (up, down, left, right) that don’t change. Instead of thinking about whether or not an object should change its orientation, select the semantic content attribute that best describes the object.

For example, set the semantic content attribute on a [WKInterfaceGroup](../wkinterfacegroup.md) object to control whether the group should flip the horizontal ordering of its contents when moving between left-to-right and right-to-left languages.

# setSemanticContentAttribute: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.1+

Sets the semantic description of the object’s contents, used to determine whether its content should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```objectivec
- (void) setSemanticContentAttribute:(WKInterfaceSemanticContentAttribute) semanticContentAttribute;
```

## Parameters

- `semanticContentAttribute`: The object’s semantic content attribute. For a list of possible values, see [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md).

<a id="Discussion"></a>

## Discussion

Some objects should not flip when switching between left-to-right and right-to-left layouts. Typically, this occurs because the object is part of the playback controls or represents physical directions (up, down, left, right) that don’t change. Instead of thinking about whether or not an object should change its orientation, select the semantic content attribute that best describes the object.

For example, set the semantic content attribute on a [WKInterfaceGroup](../wkinterfacegroup.md) object to control whether the group should flip the horizontal ordering of its contents when moving between left-to-right and right-to-left languages.
