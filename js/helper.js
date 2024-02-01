customFields.reduce((acc, _customField) => {
    const changeData = data => {
        const _fields = data?.customFieldOptions[indexOfFieldOfOption]?.fields[answerIndex]?.fields
        _fields?.forEach(_field => acc[_field?.id] = "")
    }
    if(_customField?.id ===  customFieldIdOfParentOption) {
        changeData(_customField)
    }
    return acc
}, {})

answers[]


// 