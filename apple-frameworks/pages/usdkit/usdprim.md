> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim](https://developer.apple.com/documentation/usdkit/usdprim)

# USDPrim

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A single node in a stage’s scene hierarchy that holds attributes, relationships, metadata, and child prims.

## Declaration

```swift
struct USDPrim
```

## Topics

### Creating a prim

- [init()](usdprim/init%28%29.md): An invalid prim handle.
- [init(\_:)](usdprim/init%28__%29.md): Casts an object handle to a prim handle.

### Identifying the prim

- [path](usdprim/path.md): The complete scene path to this prim, relative to its stage.
- [primPath](usdprim/primpath.md): The complete scene path to this prim, relative to its stage.
- [isValid](usdprim/isvalid.md): A Boolean value indicating whether this prim is valid.
- [specifier](usdprim/specifier-swift.property.md): The specifier that describes how this prim is defined, such as `def`, `over`, or `class`.
- [stage](usdprim/stage.md): The stage that owns this prim.
- [parent](usdprim/parent.md): The immediate parent prim of this prim.
- [description](usdprim/description.md): A summary description of this prim.
- [USDPrim.Specifier](usdprim/specifier-swift.enum.md): How a prim definition behaves in composition.

### Traversing the hierarchy

- [children](usdprim/children.md): The active, loaded, defined, non-abstract child prims of this prim.
- [allChildren](usdprim/allchildren.md): The child prims of this prim.
- [descendants](usdprim/descendants.md): The active, loaded, defined, non-abstract descendant prims of this prim, in depth-first order.
- [allDescendants](usdprim/alldescendants.md): The descendant prims of this prim.
- [nextSibling](usdprim/nextsibling.md): The active, loaded, defined, non-abstract successor of this prim in its parent’s list of children.
- [children(where:)](usdprim/children%28where_%29.md): Returns the child prims of this prim that satisfy the given predicate.
- [descendants(where:)](usdprim/descendants%28where_%29.md): Returns the descendant prims of this prim that satisfy the given predicate.
- [nextSibling(where:)](usdprim/nextsibling%28where_%29.md): The successor of this prim in its parent’s list of children that satisfies the given predicate.
- [prim(at:)](usdprim/prim%28at_%29.md): Returns the prim at a given path, relative to this prim.
- [USDPrim.Predicate](usdprim/predicate.md): A filter which returns true or false for prims based on their flags.

### Accessing properties

- [properties](usdprim/properties.md): The properties of this prim, including those provided by its schemas.
- [authoredProperties](usdprim/authoredproperties.md): The properties of this prim that have an authored opinion.
- [propertyNames](usdprim/propertynames.md): The names of this prim’s properties, including those provided by its schemas.
- [authoredPropertyNames](usdprim/authoredpropertynames.md): The names of this prim’s properties that have an authored opinion.
- [property(named:)](usdprim/property%28named_%29.md): Returns the property with a given name on this prim.
- [hasProperty(named:)](usdprim/hasproperty%28named_%29.md): Returns true if an attribute or relationship with a given name exists.
- [object(at:)](usdprim/object%28at_%29.md): Returns the object at a given path, relative to this prim.
- [USDPrim.Property](usdprim/property.md): A named property on a prim, which is either an attribute or a relationship.

### Accessing attributes

- [attributes](usdprim/attributes.md): The attributes of this prim, including those provided by its schemas.
- [authoredAttributes](usdprim/authoredattributes.md): The attributes of this prim that have an authored opinion.
- [attribute(named:)](usdprim/attribute%28named_%29.md): Returns the attribute with a given name on this prim.
- [attribute(at:)](usdprim/attribute%28at_%29.md): Returns the attribute at a given path, relative to this prim.
- [hasAttribute(named:)](usdprim/hasattribute%28named_%29.md): Returns true if an attribute with a given name exists on this prim.
- [makeAttribute(named:as:custom:variability:)](usdprim/makeattribute%28named_as_custom_variability_%29.md): Creates an attribute with the given name on this prim, or returns the existing attribute if one already exists.
- [USDPrim.Attribute](usdprim/attribute.md)

### Accessing relationships

- [relationship(named:)](usdprim/relationship%28named_%29.md): Returns the relationship with a given name on this prim.
- [relationship(at:)](usdprim/relationship%28at_%29.md): Returns the relationship at a given path, relative to this prim.
- [hasRelationship(named:)](usdprim/hasrelationship%28named_%29.md): Returns true if a relationship with a given name exists on this prim.
- [USDPrim.Relationship](usdprim/relationship.md): A property that connects a prim to one or more other objects in the stage by their paths.

### Composing references and payloads

- [references](usdprim/references.md): The reference composition arcs on this prim.
- [USDPrim.Reference](usdprim/reference.md): A reference to an external layer or asset.
- [USDPrim.ReferenceCollection](usdprim/referencecollection.md): Manages reference composition arcs on a prim.
- [USDPrim.Payload](usdprim/payload.md): A payload to an external asset.
- [USDPrim.ListPosition](usdprim/listposition.md): Where a new composition arc should be inserted relative to existing arcs.

### Authoring variants

- [USDPrim.VariantSpec](usdprim/variantspec.md): A handle to a single variant option within a variant set.
- [USDPrim.VariantSetSpec](usdprim/variantsetspec.md): A handle to a variant set — a named group of variant options.
- [USDPrim.VariantsMap](usdprim/variantsmap.md): Maps variant set names to lists of available variant names.
- [USDPrim.VariantSelectionMap](usdprim/variantselectionmap.md): Maps variant set names to selected variant names.

### Applying schemas and transforms

- [applyAPISchema(\_:)](usdprim/applyapischema%28__%29.md): Applies a single-apply API schema to this prim.
- [applyAPISchema(\_:instanceName:)](usdprim/applyapischema%28__instancename_%29.md): Applies a multi-apply API schema to this prim with the given instance name.
- [addTransformOperation(type:)](usdprim/addtransformoperation%28type_%29.md): Adds a transform operation of the given kind to this prim’s transform stack.

### Working with scene-description specs

- [USDPrim.Spec](usdprim/spec.md): A handle to a prim definition stored in a layer.
- [USDPrim.PseudoRootSpec](usdprim/pseudorootspec.md): A handle to a layer’s pseudo-root — the implicit parent of all top-level prims in a layer.

### Structures

- [USDPrim.InheritCollection](usdprim/inheritcollection.md): Manages inherit composition arcs on a prim.
- [USDPrim.PayloadCollection](usdprim/payloadcollection.md): Manages payload composition arcs on a prim.
- [USDPrim.SpecializeCollection](usdprim/specializecollection.md): Manages specializes composition arcs on a prim.
- [USDPrim.VariantSet](usdprim/variantset.md): Represents a single variant set on a prim.
- [USDPrim.VariantSetCollection](usdprim/variantsetcollection.md): Manages variant sets on a prim.

### Instance Properties

- [hasAuthoredInherits](usdprim/hasauthoredinherits.md): A Boolean value indicating whether the prim has authored inherit arcs.
- [hasAuthoredPayloads](usdprim/hasauthoredpayloads.md): A Boolean value indicating whether the prim has authored payload arcs.
- [hasAuthoredReferences](usdprim/hasauthoredreferences.md): A Boolean value indicating whether the prim has authored reference arcs.
- [hasAuthoredSpecializes](usdprim/hasauthoredspecializes.md): A Boolean value indicating whether the prim has authored specializes arcs.
- [inherits](usdprim/inherits.md): The inherit composition arcs on this prim.
- [isPrototype](usdprim/isprototype.md): A Boolean value indicating whether this prim is a prototype that instances share.
- [payloads](usdprim/payloads.md): The payload composition arcs on this prim.
- [prototype](usdprim/prototype.md): The prototype that this instance shares, or an invalid prim if this prim is not an instance.
- [specializes](usdprim/specializes.md): The specializes composition arcs on this prim.
- [transformOperations](usdprim/transformoperations.md): The transform operations on this prim, in evaluation order.
- [variantSets](usdprim/variantsets.md): The variant sets on this prim.

### Instance Methods

- [clearTransformOperations()](usdprim/cleartransformoperations%28%29.md): Removes all transform operations from the prim’s transform stack.
- [hasAPISchema(\_:)](usdprim/hasapischema%28__%29.md): Returns `true` if this prim has a particular API schema applied.
- [isSchema(\_:)](usdprim/isschema%28__%29.md): Returns `true` if this prim has the given type or a more derived type.
- [makeRelationship(named:custom:)](usdprim/makerelationship%28named_custom_%29.md): Creates a relationship with the given name on this prim, or returns the existing relationship if one already exists.
- [property(at:)](usdprim/property%28at_%29.md): Returns the property at a given path, relative to this prim.
- [removeAPISchema(\_:)](usdprim/removeapischema%28__%29.md): Removes a single-apply API schema from this prim.
- [removeAPISchema(\_:instanceName:)](usdprim/removeapischema%28__instancename_%29.md): Removes a multi-apply API schema from this prim with the given instance name.
- [transform(at:)](usdprim/transform%28at_%29.md): Computes the prim’s composed local transform at the specified time.

### Subscripts

- [subscript(\_:as:)](usdprim/subscript%28__as_%29-127jz.md): Deprecated.
- [subscript(\_:as:)](usdprim/subscript%28__as_%29-1frls.md): Access or modify the value of a named attribute on this prim.
- [subscript(\_:as:)](usdprim/subscript%28__as_%29-2pr71.md): Deprecated.
- [subscript(\_:as:)](usdprim/subscript%28__as_%29-7uc7b.md): Deprecated.
- [subscript(\_:as:)](usdprim/subscript%28__as_%29-okns.md): Deprecated.

### Default Implementations

- [CustomStringConvertible Implementations](usdprim/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [USDStage.Object.MetadataCollection](usdstage/object/metadatacollection.md)

## See Also

### Essentials

- [USDStage](usdstage.md): A 3D scene composed from one or more Universal Scene Description (USD) documents.
- [USDLayer](usdlayer.md): A single USD document that stores scene description in a file or in memory.
