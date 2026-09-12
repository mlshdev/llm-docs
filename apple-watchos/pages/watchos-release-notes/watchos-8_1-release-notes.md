> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-release-notes/watchos-8_1-release-notes](https://developer.apple.com/documentation/watchos-release-notes/watchos-8_1-release-notes)

# watchOS 8.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The watchOS 8 SDK provides support to develop watchOS apps for Apple Watch devices running watchOS 8.1. The SDK comes bundled with Xcode 13, available from the Mac App Store. For information on the compatibility requirements for Xcode 13, see [Xcode 13 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-13-release-notes).

<a id="CoreData"></a>

### CoreData

<a id="Known-Issues"></a>

#### Known Issues

- `NSExpression` immediately forbids certain operations that have significant side effects, like creating and destroying objects. Additionally, casting string class names into Class objects with `NSConstantValueExpression` is deprecated. (84017178)

  **Workaround:** Pass temporary objects to `NSExpression` in the context parameter of [expressionValue(with:context:)](https://developer.apple.com/documentation/foundation/nsexpression/expressionvalue%28with:context:%29), or with `NSPredicate` as the `substitutionVariables` parameter of [evaluate(with:substitutionVariables:)](https://developer.apple.com/documentation/foundation/nspredicate/evaluate%28with:substitutionvariables:%29). You can create a derived predicate with all the substitution variables replaced (bound), using [withSubstitutionVariables(\_:)](https://developer.apple.com/documentation/foundation/nspredicate/withsubstitutionvariables%28_:%29) on an existing `NSPredicate` so that code using the object can continue to use a simple `evaluate(with object: Any?)` invocation.

## See Also

### watchOS 8

- [watchOS 8.7 Release Notes](watchos-8_7-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 8.6 Release Notes](watchos-8_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 8.5 Release Notes](watchos-8_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 8.4 Release Notes](watchos-8_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 8.3 Release Notes](watchos-8_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 8 Release Notes](watchos-8-release-notes.md): Update your apps to use new features, and test your apps against API changes.
