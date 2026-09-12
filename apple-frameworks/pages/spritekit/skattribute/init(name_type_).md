> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skattribute/init(name:type:)](https://developer.apple.com/documentation/spritekit/skattribute/init(name:type:))

# init(name:type:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new attribute object of a specified type with a name that can be referenced within the shader.

## Declaration

```swift
init(name: String, type: SKAttributeType)
```

## Parameters

- `name`: The name of the attribute.
- `type`: The type of the attribute.

<a id="return-value"></a>

## Return Value

A new attribute object.

<a id="Discussion"></a>

## Discussion

Attribute names are typically named with a preceding “a” and an underscore. The following code shows how to initialize an attribute named `a_frequency` which is of type [SKAttributeType.float](../skattributetype/float.md).

```swift
let attribute = SKAttribute(name: "a_frequency", 
                            type: SKAttributeType.float)
```

# initWithName:type: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new attribute object of a specified type with a name that can be referenced within the shader.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name type:(SKAttributeType) type;
```

## Parameters

- `name`: The name of the attribute.
- `type`: The type of the attribute.

<a id="return-value"></a>

## Return Value

A new attribute object.

<a id="Discussion"></a>

## Discussion

Attribute names are typically named with a preceding “a” and an underscore. The following code shows how to initialize an attribute named `a_frequency` which is of type [SKAttributeTypeFloat](../skattributetype/float.md).

```swift
let attribute = SKAttribute(name: "a_frequency", 
                            type: SKAttributeType.float)
```
