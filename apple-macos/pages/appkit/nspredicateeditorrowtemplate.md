> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate)

# NSPredicateEditorRowTemplate (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A template that describes available predicates and how to display them.

## Declaration

```swift
class NSPredicateEditorRowTemplate
```

<a id="overview"></a>

## Overview

You can create instances of `NSPredicateEditorRowTemplate` programmatically or in Interface Builder. By default, a noncompound row template has three views: a popup (or static text field) on the left, a popup or static text field for operators, and either a popup or other view on the right.  You can subclass `NSPredicateEditorRowTemplate` to create a row template with different numbers or types of views.

`NSPredicateEditorRowTemplate` is a concrete class, but it has five primitive methods that are called by [NSPredicateEditor](nspredicateeditor.md): [templateViews](nspredicateeditorrowtemplate/templateviews.md), [match(for:)](nspredicateeditorrowtemplate/match%28for_%29.md), [setPredicate(\_:)](nspredicateeditorrowtemplate/setpredicate%28__%29.md), [displayableSubpredicates(of:)](nspredicateeditorrowtemplate/displayablesubpredicates%28of_%29.md), and [predicate(withSubpredicates:)](nspredicateeditorrowtemplate/predicate%28withsubpredicates_%29.md). `NSPredicateEditorRowTemplate` implements all of these methods, but you can override them for custom templates. The primitive methods are used by an instance of `NSPredicateEditor` as follows.

First, an instance of `NSPredicateEditor` is created, and some row templates are set on it—either through a nib file or programmatically. The first thing predicate editor does is ask each of the templates for their views, using [templateViews](nspredicateeditorrowtemplate/templateviews.md).

After setting up the predicate editor, you typically send it a [objectValue](nscontrol/objectvalue.md) message to restore a saved predicate. `NSPredicateEditor` needs to determine which of its templates should display each predicate in the predicate tree. It does this by sending each of its row templates a [match(for:)](nspredicateeditorrowtemplate/match%28for_%29.md) message and choosing the one that returns the highest value.

After finding the best match for a predicate, `NSPredicateEditor` copies that template to get fresh views, inserts them into the proper row, and then sets the predicate on the template using [setPredicate(\_:)](nspredicateeditorrowtemplate/setpredicate%28__%29.md). Within that method, the `NSPredicateEditorRowTemplate` object must set its views’ values to represent that predicate.

`NSPredicateEditorRowTemplate` next asks the template for the “displayable sub-predicates” of the predicate by sending a [displayableSubpredicates(of:)](nspredicateeditorrowtemplate/displayablesubpredicates%28of_%29.md) message. If a template represents a predicate in its entirety, or if the predicate has no subpredicates, it can return `nil` for this.  Otherwise, it should return a list of predicates to be made into sub-rows of that template’s row. The whole process repeats for each sub-predicate.

At this point, the user sees the predicate that was saved.  If the user then makes some changes to the views of the templates, this causes `NSPredicateEditor` to recompute its predicate by asking each of the templates to return the predicate represented by the new view values, passing in the subpredicates represented by the sub-rows (an empty array if there are none, or `nil` if they aren’t supported by that predicate type):

[predicate(withSubpredicates:)](nspredicateeditorrowtemplate/predicate%28withsubpredicates_%29.md)

## Topics

### Initializing a Template

- [init(leftExpressions:rightExpressions:modifier:operators:options:)](nspredicateeditorrowtemplate/init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-pop-up”–style row template.
- [init(leftExpressions:rightExpressionAttributeType:modifier:operators:options:)](nspredicateeditorrowtemplate/init%28leftexpressions_rightexpressionattributetype_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-view”–style row template.
- [init(compoundTypes:)](nspredicateeditorrowtemplate/init%28compoundtypes_%29.md): Initializes and returns a row template suitable for displaying compound predicates.

### Core Data Integration

- [templates(withAttributeKeyPaths:in:)](nspredicateeditorrowtemplate/templates%28withattributekeypaths_in_%29.md): Returns an array of predicate templates for the given attribute key paths for a given entity.

### Primitive Methods

- [match(for:)](nspredicateeditorrowtemplate/match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](nspredicateeditorrowtemplate/templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate(\_:)](nspredicateeditorrowtemplate/setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicates(of:)](nspredicateeditorrowtemplate/displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicate(withSubpredicates:)](nspredicateeditorrowtemplate/predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

### Information About a Row Template

- [leftExpressions](nspredicateeditorrowtemplate/leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](nspredicateeditorrowtemplate/rightexpressions.md): Returns the right hand expressions for the receiver.
- [compoundTypes](nspredicateeditorrowtemplate/compoundtypes.md): Returns the compound predicate types.
- [modifier](nspredicateeditorrowtemplate/modifier.md): Returns the comparison predicate modifier for the receiver.
- [operators](nspredicateeditorrowtemplate/operators.md): Returns the array of comparison predicate operators.
- [options](nspredicateeditorrowtemplate/options.md): Returns the comparison predicate options.
- [rightExpressionAttributeType](nspredicateeditorrowtemplate/rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.

### Initializers

- [init(coder:)](nspredicateeditorrowtemplate/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing Row Templates

- [rowTemplates](nspredicateeditor/rowtemplates.md): The row templates for the receiver.

# NSPredicateEditorRowTemplate (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A template that describes available predicates and how to display them.

## Declaration

```objectivec
@interface NSPredicateEditorRowTemplate : NSObject
```

<a id="overview"></a>

## Overview

You can create instances of `NSPredicateEditorRowTemplate` programmatically or in Interface Builder. By default, a noncompound row template has three views: a popup (or static text field) on the left, a popup or static text field for operators, and either a popup or other view on the right.  You can subclass `NSPredicateEditorRowTemplate` to create a row template with different numbers or types of views.

`NSPredicateEditorRowTemplate` is a concrete class, but it has five primitive methods that are called by [NSPredicateEditor](nspredicateeditor.md): [templateViews](nspredicateeditorrowtemplate/templateviews.md), [matchForPredicate:](nspredicateeditorrowtemplate/match%28for_%29.md), [setPredicate:](nspredicateeditorrowtemplate/setpredicate%28__%29.md), [displayableSubpredicatesOfPredicate:](nspredicateeditorrowtemplate/displayablesubpredicates%28of_%29.md), and [predicateWithSubpredicates:](nspredicateeditorrowtemplate/predicate%28withsubpredicates_%29.md). `NSPredicateEditorRowTemplate` implements all of these methods, but you can override them for custom templates. The primitive methods are used by an instance of `NSPredicateEditor` as follows.

First, an instance of `NSPredicateEditor` is created, and some row templates are set on it—either through a nib file or programmatically. The first thing predicate editor does is ask each of the templates for their views, using [templateViews](nspredicateeditorrowtemplate/templateviews.md).

After setting up the predicate editor, you typically send it a [objectValue](nscontrol/objectvalue.md) message to restore a saved predicate. `NSPredicateEditor` needs to determine which of its templates should display each predicate in the predicate tree. It does this by sending each of its row templates a [matchForPredicate:](nspredicateeditorrowtemplate/match%28for_%29.md) message and choosing the one that returns the highest value.

After finding the best match for a predicate, `NSPredicateEditor` copies that template to get fresh views, inserts them into the proper row, and then sets the predicate on the template using [setPredicate:](nspredicateeditorrowtemplate/setpredicate%28__%29.md). Within that method, the `NSPredicateEditorRowTemplate` object must set its views’ values to represent that predicate.

`NSPredicateEditorRowTemplate` next asks the template for the “displayable sub-predicates” of the predicate by sending a [displayableSubpredicatesOfPredicate:](nspredicateeditorrowtemplate/displayablesubpredicates%28of_%29.md) message. If a template represents a predicate in its entirety, or if the predicate has no subpredicates, it can return `nil` for this.  Otherwise, it should return a list of predicates to be made into sub-rows of that template’s row. The whole process repeats for each sub-predicate.

At this point, the user sees the predicate that was saved.  If the user then makes some changes to the views of the templates, this causes `NSPredicateEditor` to recompute its predicate by asking each of the templates to return the predicate represented by the new view values, passing in the subpredicates represented by the sub-rows (an empty array if there are none, or `nil` if they aren’t supported by that predicate type):

[predicateWithSubpredicates:](nspredicateeditorrowtemplate/predicate%28withsubpredicates_%29.md)

## Topics

### Initializing a Template

- [initWithLeftExpressions:rightExpressions:modifier:operators:options:](nspredicateeditorrowtemplate/init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-pop-up”–style row template.
- [initWithLeftExpressions:rightExpressionAttributeType:modifier:operators:options:](nspredicateeditorrowtemplate/init%28leftexpressions_rightexpressionattributetype_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-view”–style row template.
- [initWithCompoundTypes:](nspredicateeditorrowtemplate/init%28compoundtypes_%29.md): Initializes and returns a row template suitable for displaying compound predicates.

### Core Data Integration

- [templatesWithAttributeKeyPaths:inEntityDescription:](nspredicateeditorrowtemplate/templates%28withattributekeypaths_in_%29.md): Returns an array of predicate templates for the given attribute key paths for a given entity.

### Primitive Methods

- [matchForPredicate:](nspredicateeditorrowtemplate/match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](nspredicateeditorrowtemplate/templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate:](nspredicateeditorrowtemplate/setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicatesOfPredicate:](nspredicateeditorrowtemplate/displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicateWithSubpredicates:](nspredicateeditorrowtemplate/predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

### Information About a Row Template

- [leftExpressions](nspredicateeditorrowtemplate/leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](nspredicateeditorrowtemplate/rightexpressions.md): Returns the right hand expressions for the receiver.
- [compoundTypes](nspredicateeditorrowtemplate/compoundtypes.md): Returns the compound predicate types.
- [modifier](nspredicateeditorrowtemplate/modifier.md): Returns the comparison predicate modifier for the receiver.
- [operators](nspredicateeditorrowtemplate/operators.md): Returns the array of comparison predicate operators.
- [options](nspredicateeditorrowtemplate/options.md): Returns the comparison predicate options.
- [rightExpressionAttributeType](nspredicateeditorrowtemplate/rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Managing Row Templates

- [rowTemplates](nspredicateeditor/rowtemplates.md): The row templates for the receiver.
