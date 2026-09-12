> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/get-a-context](https://developer.apple.com/documentation/classkitcatalogapi/get-a-context)

# Get a Context

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Web Service Endpoint  
**Availability:** ClassKit 1.0+

Fetch information that you previously stored about your app’s assignable activities.

## URL

```http
GET https://classkit-catalog.apple.com/v1/contexts
```

## Query Parameters

- `environment` — `string` (required): The development or production environment to use for this access. For details, see [Testing Your ClassKit Catalog Implementation](testing-your-classkit-catalog-implementation.md).
  **Allowed values:** `development`, `production`
- `identifierPath` — `string` (required): The identifier path for the context to retrieve. Format this value as a URL-encoded JSON array of strings.
- `locale` — `string` (required): The locale of the context to retrieve. Use one of the identifiers supported by the [Locale](../foundation/locale.md) structure. It must match a locale that your app supports.

## Response Codes

- `200` OK — `ContextsResponse`:
- `400` Bad Request: The request contained an error.
- `403` Forbidden: The request wasn’t authorized.

<a id="Discussion"></a>

## Discussion

<a id="Example"></a>

### Example

**Request**

```
https://classkit-catalog.apple.com/v1/contexts?environment=development&identifierPath=%5B%22com.apple.www.Quizzer%22%2C%22Quiz%20Catalog%22%2C%22Fun%20Math%20Quiz%22%5D&locale=en-us
```

**Response**

```json
{
  "contexts": [
    {
      "data": {
        "identifierPath": ["com.apple.www.Quizzer", "Quiz Catalog", "Fun Math Quiz"],
        "title": "Fractions Quiz 01",
        "type": "quiz",
        "summary": "This quiz tests your ability to add and subtract fractions.",
        "thumbnailId": "math.png",
        "displayOrder": "1",
        "topic": "math",
        "suggestedAge": ["0", "9223372036854775807"],
        "suggestedCompletionTime": ["0", "0"],
        "isAssignable": true,
        "progressReportingCapabilities": [
          {
            "kind": "score",
            "details": "This reports a student’s score on the quiz."
          },
          {
            "kind": "duration",
            "details": "This tracks the time elapsed on the quiz."
          }
        ]
      },
      "metadata": {
        "locale": "en-us",
        "minimumBundleVersion": "1.0.0",
        "keywords": ["Mathematics", "Fractions", "Quiz", "Grade 5", "Grade 6", "Addition", "Subtraction"],
        "presentableLocales": ["mul"]
      }
    }
  ]
}

```

## See Also

### Declaring Contexts

- [Preparing Context Data](preparing-context-data.md): Adjust how you manage context data when working with the web API.
- [Create or Replace Contexts](create-or-replace-contexts.md): Store information about the assignable content that your educational app provides.
- [Delete a Context](delete-a-context.md): Remove information that you previously stored about your app’s assignable activities.
- [Context](context.md): An area of your app that represents an assignable task, like a quiz or a chapter.
- [ContextsRequest](contextsrequest.md): A request that you make when modifying context information.
- [ContextsResponse](contextsresponse.md): The response you receive after modifying context information.
