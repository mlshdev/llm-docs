> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting](https://developer.apple.com/documentation/appintentstesting)

# App Intents Testing

**Framework:** App Intents Testing  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Test your app intents, entities, queries, and integration with system features like Siri or Spotlight.

<a id="overview"></a>

## Overview

The [App Intents](https://developer.apple.com/documentation/appintents) framework allows you to integrate your app with system features like Siri, Shortcuts, or Spotlight. Use App Intents Testing to run and test your app intents, entities, enums, and query logic out-of-process — the same way Siri or Shortcuts perform them. Additionally, with App Intents Testing you can create tests that verify your app’s integration with system features like Siri or Spotlight. The framework provides type-erased APIs that let you reference intents by name, set their parameters, and run them without linking against your app target.

## Topics

### Essentials

- [Testing your App Intents code](appintentstesting/testing-your-app-intents-code.md): Evaluate intents, entities, and queries, and verify your integration with system features like Spotlight and Siri.

### Intents, entities, enums, and queries

- [IntentDefinitions](appintentstesting/intentdefinitions.md): A collection of definitions that catalog your app’s intents, enums, entities, and queries.

### Intent and query result verification

- [ResolvedIntentResult](appintentstesting/resolvedintentresult.md): A type-safe result from performing an app intent.
- [ResolvedValueQueryResult](appintentstesting/resolvedvaluequeryresult.md): The result of an intent value query.

### Entity annotation testing

- [ViewAnnotation](appintentstesting/viewannotation.md): The onscreen context you provide to the system by annotating a view with an app entity.

### Intermediate types

- [AnyAppIntent](appintentstesting/anyappintent.md): A type-erased, intermediate representation of an app intent for testing purposes.
- [AnyAppEntity](appintentstesting/anyappentity.md): A type-erased, intermediate representation of your app entity for testing purposes.
- [AnyEntityQuery](appintentstesting/anyentityquery.md): A type-erased, intermediate representation of your entity query for testing purposes.
- [AnyAppEnum](appintentstesting/anyappenum.md): A type-erased representation of an app enumeration that provides dynamic enumeration value access.
- [AnyTransientAppEntity](appintentstesting/anytransientappentity.md): A type-erased representation of a transient app entity that provides dynamic property access.

### Supporting types

- [AppIntentTypeDefinition](appintentstesting/appintenttypedefinition.md): A protocol that associates a definition type with its corresponding instance type.
- [DynamicPropertyPath](appintentstesting/dynamicpropertypath.md): A type-safe, dynamic path to access nested intent values.
- [DynamicPropertyPathCollection](appintentstesting/dynamicpropertypathcollection.md): Indexed result items from an intent value query.
- [IntentValuePropertiesCallable](appintentstesting/intentvaluepropertiescallable.md): A callable wrapper that creates app intent instances from keyword arguments.
