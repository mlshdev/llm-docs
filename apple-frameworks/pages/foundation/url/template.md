> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/template](https://developer.apple.com/documentation/foundation/url/template)

# URL.Template

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A template for constructing a URL from variable expansions.

## Declaration

```swift
struct Template
```

<a id="overview"></a>

## Overview

This is an template that can be expanded into a [URL](../url.md) by calling `URL(template:variables:)`.

Templating has a rich set of options for substituting various parts of URLs. See [RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570) for details.

<a id="Example-1"></a>

### Example 1

```swift
let template = URL.Template("http://www.example.com/foo{?query,number}")!
let url = URL(
    template: template,
    variables: [
        .query: "bar baz",
        .number: "234",
    ]
)

extension URL.Template.VariableName {
    static var query: URL.Template.VariableName { .init("query") }
    static var number: URL.Template.VariableName { .init("number") }
}
```

The resulting URL will be

```text
http://www.example.com/foo?query=bar%20baz&number=234
```

<a id="Usage"></a>

### Usage

Templates provide a description of a URL space and define how URLs can be constructed given specific variable values. Their intended use is, for example, to allow a server to communicate to a client how to construct URLs for particular resources.

For each specific resource, an API contract is required to clearly define the variables applicable to that resource and its associated template. For example, such an API contract might specify that the variable `query` is mandatory and must be an alphanumeric string while the variable `number` is optional and must be a positive integer if provided. The server could then provide the client with a template such as `http://www.example.com/foo{?query,number}`, which the client can subsequently use to substitute variables accordingly.

An API contract is necessary to define which substitutions are valid within a given URL space. There is no guarantee that every possible expansion of variable expressions corresponds to an existing resource URL; indeed, some expansions may not even produce a valid URL. Only the API specification itself can determine which expansions are expected to yield valid URLs corresponding to existing resources.

<a id="Example-2"></a>

### Example 2

Here’s an example, that illustrates how to define a specific set of variables:

```swift
struct MyQueryTemplate: Sendable, Hashable {
    var template: URL.Template

    init?(_ template: String) {
        guard let t = URL.Template(template) else { return nil }
        self.template = t
    }
}

struct MyQuery: Sendable, Hashable {
    var query: String
    var number: Int?

    var variables: [URL.Template.VariableName: URL.Template.Value] {
        var result: [URL.Template.VariableName: URL.Template.Value] = [
            .query: .text(query)
        ]
        if let number {
            result[.number] = .text("\(number)")
        }
        return result
    }
}

extension URL.Template.VariableName {
    static var query: URL.Template.VariableName { .init("query") }
    static var number: URL.Template.VariableName { .init("number") }
}

extension URL {
    init?(
        template: MyQueryTemplate,
        query: MyQuery
    ) {
        self.init(
            template: template.template,
            variables: query.variables
        )
    }
}
```

## Topics

### Structures

- [URL.Template.Value](template/value.md): The value of a variable used for expanding a template.
- [URL.Template.VariableName](template/variablename.md): The name of a variable used for expanding a template.

### Initializers

- [init(\_:)](template/init%28__%29.md): Creates a new template from its text form.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
