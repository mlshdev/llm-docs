> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/templates(withattributekeypaths:in:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/templates(withattributekeypaths:in:))

# templates(withAttributeKeyPaths:in:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns an array of predicate templates for the given attribute key paths for a given entity.

## Declaration

```swift
class func templates(withAttributeKeyPaths keyPaths: [String], in entityDescription: NSEntityDescription) -> [NSPredicateEditorRowTemplate]
```

## Parameters

- `keyPaths`: An array of attribute key paths originating at `entityDescription`. The key paths may cross relationships but must terminate in attributes.
- `entityDescription`: A Core Data entity description.

<a id="return-value"></a>

## Return Value

An array of predicate templates for `keyPaths` originating at `entityDescription`.

<a id="Discussion"></a>

## Discussion

This method determines which key paths in the entity description can use the same views (that is, share the same attribute type). For each of these groups, it instantiates individual templates via [init(leftExpressions:rightExpressions:modifier:operators:options:)](init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md).

# templatesWithAttributeKeyPaths:inEntityDescription: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns an array of predicate templates for the given attribute key paths for a given entity.

## Declaration

```objectivec
+ (NSArray<NSPredicateEditorRowTemplate *> *) templatesWithAttributeKeyPaths:(NSArray<NSString *> *) keyPaths inEntityDescription:(NSEntityDescription *) entityDescription;
```

## Parameters

- `keyPaths`: An array of attribute key paths originating at `entityDescription`. The key paths may cross relationships but must terminate in attributes.
- `entityDescription`: A Core Data entity description.

<a id="return-value"></a>

## Return Value

An array of predicate templates for `keyPaths` originating at `entityDescription`.

<a id="Discussion"></a>

## Discussion

This method determines which key paths in the entity description can use the same views (that is, share the same attribute type). For each of these groups, it instantiates individual templates via [initWithLeftExpressions:rightExpressions:modifier:operators:options:](init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md).
