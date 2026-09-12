> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/null](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/null)

# null

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+ · watchOS 27.0+

Creates a null schema.

## Declaration

```swift
static var null: DynamicGenerationSchema { get }
```

<a id="discussion"></a>

## Discussion

You can use null schemas as a way to express types that cannot be absent, but may have an empty value.

```
let person = DynamicGenerationSchema(
    name: "Person",
    properties: []
        DynamicGenerationSchema.Property(
          name: "fullName",
          schema: DynamicGenerationSchema(type: String.self)
        )
    ]
)

let nullablePerson = DynamicGenerationSchema(
  name: "NullablePerson",
  anyOf: [person, .null]
)

let schema = try GenerationSchema(root: nullablePerson, dependencies: [])
```
