> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-15_1-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-15_1-release-notes)

# tvOS 15.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The tvOS 15 SDK provides support to develop tvOS apps for Apple TV devices running tvOS 15.1. The SDK comes bundled with Xcode 13, available from the Mac App Store. For information on the compatibility requirements for Xcode 13, see [Xcode 13 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-13-release-notes).

<a id="CoreData"></a>

### CoreData

<a id="Known-Issues"></a>

#### Known Issues

- `NSExpression` immediately forbids certain operations that have significant side effects, like creating and destroying objects. Additionally, casting string class names into Class objects with `NSConstantValueExpression` is deprecated. (84017178)

  **Workaround:** Pass temporary objects to `NSExpression` in the context parameter of [expressionValue(with:context:)](../foundation/nsexpression/expressionvalue%28with_context_%29.md), or with `NSPredicate` as the `substitutionVariables` parameter of [evaluate(with:substitutionVariables:)](../foundation/nspredicate/evaluate%28with_substitutionvariables_%29.md). You can create a derived predicate with all the substitution variables replaced (bound), using [withSubstitutionVariables(\_:)](../foundation/nspredicate/withsubstitutionvariables%28__%29.md) on an existing `NSPredicate` so that code using the object can continue to use a simple `evaluate(with object: Any?)` invocation.

## See Also

### tvOS 15

- [tvOS 15.6 Release Notes](tvos-15_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.5 Release Notes](tvos-15_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.4 Release Notes](tvos-15_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.3 Release Notes](tvos-15_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.2 Release Notes](tvos-15_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15 Release Notes](tvos-15-release-notes.md): Update your apps to use new features, and test your apps against API changes.
